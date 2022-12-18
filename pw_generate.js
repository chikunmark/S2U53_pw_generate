function generatePW() {
  // define things user might want
  const lowerCaseLetters = 'abcdefghijklmnopqrstuvwxyz'
  const upperCaseLetters = lowerCaseLetters.toUpperCase() // 變大寫
  const numbers = '1234567890'
  const symbols = '`~!@$%^&*()-_+={}[]|;:"<>,.?/' + "'"

  // define dummy data
  const options = {
    length: 12,
    lowercase: 'on',
    uppercase: 'on',
    numbers: 'on',
    excludeCharacters: '40',
  }
  // console.log('options:', options)

  // create a collection to store things user picked up
  let collection = []
  // let lowerCaseArray = lowerCaseLetters.split('')
  // collection = collection.concat(lowerCaseArray)

  if (options.lowercase === 'on') {
    collection = collection.concat(lowerCaseLetters.split(''))
  }

  if (options.uppercase === 'on') {
    collection = collection.concat(upperCaseLetters.split(''))
  }
  if (options.numbers === 'on') {
    collection = collection.concat(numbers.split(''))
  }
  if (options.symbols === 'on') {
    collection = collection.concat(symbols.split(''))
  }

  console.log(collection)

  // remove things user do not need

  // start generating PW

  // return PW
  console.log('This function will generate PW')
}

generatePW()
