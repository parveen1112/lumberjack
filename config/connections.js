/**
 * Connections
 * (sails.config.connections)
 *
 * `Connections` are like "saved settings" for your adapters.  What's the difference between
 * a connection and an adapter, you might ask?  An adapter (e.g. `sails-mysql`) is generic--
 * it needs some additional information to work (e.g. your database host, password, user, etc.)
 * A `connection` is that additional information.
 *
 * Each model must have a `connection` property (a string) which is references the name of one
 * of these connections.  If it doesn't, the default `connection` configured in `config/models.js`
 * will be applied.  Of course, a connection can (and usually is) shared by multiple models.
 * .
 * Note: If you're using version control, you should put your passwords/api keys
 * in `config/local.js`, environment variables, or use another strategy.
 * (this is to prevent you inadvertently sensitive credentials up to your repository.)
 *
 * For more information on configuration, check out:
 * http://sailsjs.org/#!/documentation/reference/sails.config/sails.config.connections.html
 */

module.exports.connections = {

  /***************************************************************************
  *                                                                          *
  * Local disk storage for DEVELOPMENT ONLY                                  *
  *                                                                          *
  * Installed by default.                                                    *
  *                                                                          *
  ***************************************************************************/
  localDiskDb: {
    adapter: 'sails-disk'
  },

  /***************************************************************************
  *                                                                          *
  * MySQL is the world's most popular relational database.                   *
  * http://en.wikipedia.org/wiki/MySQL                                       *
  *                                                                          *
  * Run: npm install sails-mysql                                             *
  *                                                                          *
  ***************************************************************************/
  // someMysqlServer: {
  //   adapter: 'sails-mysql',
  //   host: 'YOUR_MYSQL_SERVER_HOSTNAME_OR_IP_ADDRESS',
  //   user: 'YOUR_MYSQL_USER', //optional
  //   password: 'YOUR_MYSQL_PASSWORD', //optional
  //   database: 'YOUR_MYSQL_DB' //optional
  // },

  /***************************************************************************
  *                                                                          *
  * MongoDB is the leading NoSQL database.                                   *
  * http://en.wikipedia.org/wiki/MongoDB                                     *
  *                                                                          *
  * Run: npm install sails-mongo                                             *
  *                                                                          *
  ***************************************************************************/
  //mongodb://swapnesh:technocrats@ds141450.mlab.com:41450/lumberjack
  /*mongodb: {
     adapter: 'sails-mongo',
     host: 'localhost',
     port: 27017,
     user: '', //optional
     password: '', //optional
     database: 'lumberjack' //optional
  },*/

  /***************************************************************************
  *                                                                          *
  * PostgreSQL is another officially supported relational database.          *
  * http://en.wikipedia.org/wiki/PostgreSQL                                  *
  *                                                                          *
  * Run: npm install sails-postgresql                                        *
  *                                                                          *
  *                                                                          *
  ***************************************************************************/
  // somePostgresqlServer: {
  //   adapter: 'sails-postgresql',
  //   host: 'YOUR_POSTGRES_SERVER_HOSTNAME_OR_IP_ADDRESS',
  //   user: 'YOUR_POSTGRES_USER', // optional
  //   password: 'YOUR_POSTGRES_PASSWORD', // optional
  //   database: 'YOUR_POSTGRES_DB' //optional
  // }


  /***************************************************************************
  *                                                                          *
  * More adapters: https://github.com/balderdashy/sails                      *
  *                                                                          *
  ***************************************************************************/


firebase: {
    adapter: 'sails-firebase',
 
    credential: {
"type": "service_account",
  "project_id": "lumberjack-45f7a",
  "private_key_id": "248a7ac12fd210517e2c618618d00552e9225ca3",
  "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDVFbfHUyJzE5xO\noEi4wGKJRY8K0WISMs7Rj8luHQ429xAkO/XZ4Eyut98p5JfVX2P8ZF7utiLeUD2q\neZsjUSS3M5aHCFzte6hYE+lNQBY2K6JS1YqV18WhBCK2SiySYStlF3uH0EKFHXkZ\nMGXcU3Fwxrvj33w4y82oMBetpGdovAMR97uQl3dvhS3ArNk8TK80YtVcEjNa5VHo\nZ491Jh9h12QBY/B3yygSb/2toGq/tnzcoERQGszn0/YB3aAmlBwlzqVws8ZoeQwU\nsTHUcAvF+Rg6X4JJ9t/u0rfF9+jxKpZIbyxsfYnAr6K/zhbR8dgfrtqxBt3R9cRE\nCvKFke2JAgMBAAECggEASLXXdzmkCLaJYL8K8ZgcR5EnxV47Y9BYiGPTLTLW9eSK\naoLXWphSMlBl4yqwsMuTF728MyKNdWTWFgTW7k8zAxykYcF1zEek4yEwO/8BVUzA\nYBmj54uwUUhS+/cFjJGBuEYyDd7/w+KRvwmnyG3kyMHXvWM2RT8uFxUKD2OJMdBO\ninDAL9OOn957yPdGUk3QwWNdcfM1GYyjuiIfx46lBPj5R+q2P6JmAfEcvMQjmoLi\nqazS7/CvMXnQa+7iwxAwNlE3JORquvI9whkv75pHFk9VgT5OQaATISieUVZYUaIG\nho4vYWa4Q0Tt2VWj6TUGv0qnW2S0O8pIH3pv5mhdAQKBgQDzBO4zy2ePTd9/QaU/\nYs8ueK5/LaQ8MPmJ7NCl7/udqtcN7ziUaKbPrC0AtKiXH8D/2KpvfIv2dP8GfxKH\nd2NwNrdlwpnvcC2je8WHdfJ8X/A5vzOxkhRoBBLd5Ivff6FWhaJYuZrOtkLCGT1Y\nXb/Wl809EJrW8IA3Qp5bpbajKQKBgQDgd3YLl8Q3FG+BMYG1PJzG1dOCkjLFHj9h\nA+nck6Rqb1/fvVf38myeCsK2HTB27VmJjjS3gCralzkl46t7YpWLLUqhltJgnydC\nxV8rkVljwQmL7T9ZtgmtyUHJNqnv9i+CrR80KPQuMOjXSJlQuFfIfuy/J+EawmKD\nv07+SAOjYQKBgQCp6eKaeDdaLPp9QWrGnNF7DooDBeh05VE0LE3eF6L3pEFkzsPi\nkCFBxoJYoffWYi9RMy5HcO9zTG4bHrHX4ZO3G6qzDZMPpIFkct+zTLZUW8fcuGDu\nYNK/v0lpt6hMhjJKCnluS6d/rFOU3ozTwgilg9HORlPcwJ8FBCEwtvaxsQKBgQC0\nFAK3ADWhPprKGc6GeK8J8YdzLBjg/Qg5q6sVk7kGzn0rATsupuUu0VEuSzKTZo07\nhsOSJ5e5sDJfzEvJe+ifNGG4S0hRzbzwm2ljiYMePUKMaHQ3Y4xWSKynYVxqL6Yj\n/wGWlfh3ijNya0LceFeseO8z2CmGj0X7jiIwa9PHYQKBgALqhiPAvmy9cS70m+WE\npl5DBxX2StOCnmaWs9L9LdA+L3bqt5jivd4r+r3/3fZEMj2K69iunzs1a5sLd1W0\nwzIjcf6mcDUzUQ0B3hVuaOdGG34R7891jCYQReRxqKHj0FgBVyzeIe7GWn+W8mlD\ndQymTEM1rM4sjmAC+dLF6qKF\n-----END PRIVATE KEY-----\n",
  "client_email": "firebase-adminsdk-ex8w8@lumberjack-45f7a.iam.gserviceaccount.com",
  "client_id": "104822306564007186736",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://accounts.google.com/o/oauth2/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-ex8w8%40lumberjack-45f7a.iam.gserviceaccount.com"
    },
 
    databaseURL: "https://lumberjack-45f7a.firebaseio.com",
  }

};
