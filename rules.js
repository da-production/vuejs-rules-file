const rules = {
  required: value => !!value || "Ce champ est obligatoire",
  min: limit => val => val.length >= limit || `Le champ doit avoir au moins  ${limit} caractères`,
  max: limit => val => val.length <= limit || `Le champ ne doit pas avoir plus  ${limit} caractères`,
  password: value => {
    const pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/

    return (
      pattern.test(value) ||
      "Min. 8 caractères avec au moins une lettre majuscule, un chiffre et un caractère spécial."
    )
  },
  password_confirmation: password => val => val == password || `Les mots de passe ne correspondent pas`,
  email: value => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    return (
      pattern.test(value) ||
      "Adresse e-mail invalide."
    )
  },
  int: value => {
    const pattern = /^-?\d+$/

    return (
      pattern.test(value) ||
      "Entier invalide."
    )
  },
  number: value => {
    const pattern = /^-?\d*\.?\d+$/

    return (
      pattern.test(value) ||
      "Numéro invalide."
    )
  },
  moeny: value => {
    const pattern = /^\d+(\.\d{1,2})?$/

    return (
      pattern.test(value) ||
      "Format monétaire invalide."
    )
  },
  username: value => {
    const pattern = /^[a-zA-Z0-9_-]+$/

    return (
      pattern.test(value) ||
      "Nom d'utilisateur invalide."
    )
  },
  abreviation: value => {
    const pattern = /^[a-zA-Z0-9_-]+$/

    return (
      pattern.test(value) ||
      "Abreviation invalide."
    )
  },
  dateformat: value => {
    // const pattern = /^\d{4}-\d{2}-\d{2}$/;
    const pattern = /^\d{4}-(?:0[1-9]|1[0-2])-(?:0[1-9]|[12][0-9]|3[01])$/

    // const pattern = /^(?!0000)-?(?!00)(?:0[1-9]|1[0-2])-(?:0[1-9]|[12][0-9]|3[01])$/;
    return (
      pattern.test(value) ||
      "Format de date non valide. exemple: 2024-12-31"
    )
  },
  nss: value => {
    const pattern = /^\d{12}$/

    return (
      pattern.test(value) ||
      "le numéro NSS doit être composée de 12 chiffres"
    )
  },
  nin: value => {
    const pattern = /^\d{18}$/

    return (
      pattern.test(value) ||
      "le numéro NSS doit être composée de 18 chiffres"
    )
  },
  ncasnos: value => {
    const pattern = /^\d{11}$/

    return (
      pattern.test(value) ||
      "le numéro CASNOS doit être composée de 11 chiffres"
    )
  },
  file: value => {

    return !value.length || value[0].size < 2000000 || 'la taille du fichier doit être inférieure à 2 Mo !'
  },
}

export default rules
