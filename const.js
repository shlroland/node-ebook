const env = require('./env')

let resUrl
let mp3FilePath
let dbHost
let dbUser
let dbPwd
if (env === 'dev') {
    resUrl = 'http://localhost:8081/'
    mp3FilePath = '/Users/wsdehl/Desktop/resource/mp3'
    dbHost = 'localhost'
    dbUser = 'root'
    dbPwd = 'password'
} else if (env === 'prod') {
    resUrl = 'http://47.103.123.83'
    mp3FilePath = '/root/nginx/upload/mp3'
    dbHost = '47.103.123.83'
    dbUser = 'root'
    dbPwd = 'Jsmymm123,.'
}
const category = [
    'Biomedicine',
    'BusinessandManagement',
    'ComputerScience',
    'EarthSciences',
    'Economics',
    'Engineering',
    'Education',
    'Environment',
    'Geography',
    'History',
    'Laws',
    'LifeSciences',
    'Literature',
    'SocialSciences',
    'MaterialsScience',
    'Mathematics',
    'MedicineAndPublicHealth',
    'Philosophy',
    'Physics',
    'PoliticalScienceAndInternationalRelations',
    'Psychology',
    'Statistics'
]

module.exports = {
    resUrl,
    category,
    mp3FilePath,
    dbHost,
    dbUser,
    dbPwd
}
