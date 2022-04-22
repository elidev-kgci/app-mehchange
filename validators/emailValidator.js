export function emailValidator(email) {
    const re = /\S+@\S+\.\S+/
    if (!email) return "L'e-mail ne peut pas être vide."
    if (!re.test(email)) return "Entrer une adresse e-mail valide."
    return ''
  }
  