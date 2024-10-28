// Exo1 //

function calculateAge(birthdateString) {
      const birthdate = new Date(birthdateString)
      const today = new Date()

      let age = today.getFullYear() - birthdate.getFullYear();

      return age
}
console.log(calculateAge("1990-05-15"));