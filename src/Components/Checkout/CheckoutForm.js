import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as Yup from 'yup'
import { useCartContext } from '../../Contexts/CartContext'

function CheckoutForm() {
  const { setDisabledOrder, setOrderData, cartProducts } = useCartContext()
  const formSchema = Yup.object().shape({
    fullName: Yup.string()
      .required('El nombre completo es requerido.'),
    phoneNumber: Yup.string()
      .required('El telefono es requerido.'),
    email: Yup.string()
      .required('El email es requerido.'),
    confirmEmail: Yup.string()
      .required('Repetir el email es requerido.')
      .oneOf([Yup.ref('email')], 'Los emails no coinciden.'),
  })
  const formOptions = { resolver: yupResolver(formSchema), mode: 'onChange' }
  const { register, formState, trigger, getValues } = useForm(formOptions)
  const { errors } = formState
  async function handleChange() {
    const isValid = await trigger(['fullName', 'phoneNumber', 'email', 'confirmEmail']);
    const values = getValues()
    if(isValid){
      setOrderData({
        items: cartProducts.map((p) => {
          return {
            productId: p.product.id,
            amount: p.amount
          }
        }),
        state: 'pendiente',
        createdAt: new Date(),
        userData: {
          name: values.fullName,
          email: values.email,
          phoneNumber: values.phoneNumber
        }
      })
    }
    setDisabledOrder(!isValid)
  }
  return (
  <div className="card">
    <form className="row g-3" onChange={handleChange}>
      <div className="mb-3">
        <label htmlFor="fullNameControl" className="form-label">Nombre Completo</label>
        <input
          type="text"
          id="fullNameControl"
          placeholder="Lionel Messi"
          {...register('fullName')}
          className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
        />
        <div className="invalid-feedback">{errors.fullName?.message}</div>
      </div>
      <div className="mb-3">
        <label htmlFor="phoneNumberControl" className="form-label">Telefono</label>
        <input
          type="text"
          id="phoneNumberControl"
          placeholder="+5492494567819"
          {...register('phoneNumber')}
          className={`form-control ${errors.phoneNumber ? 'is-invalid' : ''}`}
        />
        <div className="invalid-feedback">{errors.phoneNumber?.message}</div>
      </div>
      <div className="mb-3">
        <label htmlFor="emailControl" className="form-label">Email</label>
        <input
          type="text"
          id="emailControl"
          placeholder="nombre.apellido@example.com"
          {...register('email')}
          className={`form-control ${errors.email ? 'is-invalid' : ''}`}
        />
        <div className="invalid-feedback">{errors.email?.message}</div>
      </div>
      <div className="mb-3">
        <label htmlFor="confirmEmailControl" className="form-label">Confirmar Email</label>
        <input
          type="text"
          id="confirmEmailControl"
          placeholder="nombre.apellido@example.com"
          {...register('confirmEmail')}
          className={`form-control ${errors.confirmEmail ? 'is-invalid' : ''}`}
        />
        <div className="invalid-feedback">{errors.confirmEmail?.message}</div>
      </div>
    </form>
  </div>
  )
}

export default CheckoutForm;