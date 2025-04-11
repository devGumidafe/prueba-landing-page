import { ref, reactive } from 'vue'
import type { IRegister } from '@/types/IRegister'
import type { IErrors } from '@/types/IErrors'

export const useFormRegister = () => {
  const registros = ref<IRegister[]>([])
  const isSubmitting = ref(false)

  const formState = reactive<IRegister>({
    nombre: '',
    apellidos: '',
    email: '',
    telefono: '',
  })

  const errors = reactive<IErrors>({
    nombre: '',
    apellidos: '',
    email: '',
    telefono: '',
  })

  const resetForm = () => {
    Object.keys(formState).forEach((key) => {
      formState[key as keyof IRegister] = ''
    })
  }

  const resetErrors = () => {
    Object.keys(errors).forEach((key) => {
      errors[key as keyof IErrors] = ''
    })
  }

  const validateForm = (): boolean => {
    let isValid = true
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const telefonoRegex = /^[0-9]{9}$/

    resetErrors()

    if (!formState.nombre.trim()) {
      errors.nombre = 'El nombre es obligatorio'
      isValid = false
    }

    if (!formState.apellidos.trim()) {
      errors.apellidos = 'Los apellidos son obligatorios'
      isValid = false
    }

    if (!formState.email.trim()) {
      errors.email = 'El email es obligatorio'
      isValid = false
    } else if (!emailRegex.test(formState.email)) {
      errors.email = 'El email no es válido'
      isValid = false
    }

    if (!formState.telefono.trim()) {
      errors.telefono = 'El teléfono es obligatorio'
      isValid = false
    } else if (!telefonoRegex.test(formState.telefono)) {
      errors.telefono = 'El teléfono debe tener 9 dígitos'
      isValid = false
    }

    return isValid
  }

  const handleSubmit = async (e: Event) => {
    e.preventDefault()

    if (isSubmitting.value) return

    isSubmitting.value = true

    try {
      if (validateForm()) {
        registros.value.push({ ...formState })
        resetForm()
        return true
      }
    } catch (error) {
      console.error('Error al procesar el formulario:', error)
    } finally {
      isSubmitting.value = false
    }

    return false
  }

  return {
    formState,
    errors,
    registros,
    isSubmitting,
    handleSubmit,
    validateForm,
  }
}
