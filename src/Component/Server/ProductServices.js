class ContactService {
    static contactList =[
            {
                "gender": "male",
                "name":{
                    "title":"Mr",
                    "first" :"Ajaguna",
                    "last": "Kaosarat"
                }, 
                "location" : {
                    "street":{
                        "number":77,
                        "name" :"Adura"
                    },
                    "city" : "Surulere",
                    "state": "Lagos",
                    "country": "Nigeria",
                    "postcode": 3456,
                    "coordinates":{
                        "latitude":"55.6425",
                        "longitude":"-21.3266" 
                    },
                    "timezone":{
                        "offset":"+4:30",
                        "description":"Kabul"
                    }
                },
                "email":"mokelang@yahoo.com",
                "login":{
                    "uuid":"64675hw7e-he47-475g-846d-83433535h",
                    "username":"gorzie",
                    "password": "tracey123",
                    "sale":"81i0wa09W",
                    "md5":"1172648544687468092bu4ud8yd83y98dbhc",
                    "sha1":"997659947he7huyywe7yhweuysduiy7ee7te7edg8ew",
                    "sha256":"b237ydysh848h8he8rhuhd8he8h89hd8hdhd8e8hd8dh8dh8dh8dhdhd"
                },
                "dob":{
                    "date":"1948-11-09T21:27:30.452Z",
                    "age":72
                },
                "registered":{
                    "date":"2001-09-09T21:02:30.4928",
                    "age":19
                },
                "phone":"3979475498",
                "cell":"472658287479",
                "id":{
                    "name":"FN",
                    "value":"0484784094290"
                },
                "picture":{
                    "large":<img src="" alt="pic1" />,
                    "medium":<img src="" alt="pic2" />
                }
            },
            {
                "gender": "male",
                "name":{
                    "title":"Mr",
                    "first" :"Folorunsho",
                    "last": "Ajao"
                }, 
                "location" : {
                    "street":{
                        "number":77,
                        "name" :"Adura"
                    },
                    "city" : "Surulere",
                    "state": "Lagos",
                    "country": "Nigeria",
                    "postcode": 3456,
                    "coordinates":{
                        "latitude":"55.6425",
                        "longitude":"-21.3266" 
                    },
                    "timezone":{
                        "offset":"+4:30",
                        "description":"Kabul"
                    }
                },
                "email":"raaoisjd@yahoo.com",
                "login":{
                    "uuid":"90u5w7e-he47-475g-846d-3584798479048h",
                    "username":"Kandhed",
                    "password": "tracey123",
                    "sale":"81i0wa09W",
                    "md5":"1172648544687468092bu4ud8yd83y98dbhc",
                    "sha1":"997659947he7huyywe7yhweuysduiy7ee7te7edg8ew",
                    "sha256":"b237ydysh848h8he8rhuhd8he8h89hd8hdhd8e8hd8dh8dh8dh8dhdhd"
                },
                "dob":{
                    "date":"1948-11-09T21:27:30.452Z",
                    "age":72
                },
                "registered":{
                    "date":"2001-09-09T21:02:30.4928",
                    "age":19
                },
                "phone":"3979475498",
                "cell":"472658287479",
                "id":{
                    "name":"FN",
                    "value":"0484784094290"
                },
                "picture":{
                    "large":<img src="" alt="pic1" />,
                    "medium":<img src="" alt="pic2" />
                }
            },
            {
                "gender": "male",
                "name":{
                    "title":"Mr",
                    "first" :"Bolaji",
                    "last": "Busayo"
                }, 
                "location" : {
                    "street":{
                        "number":67,
                        "name" :"Adura"
                    },
                    "city" : "Surulere",
                    "state": "Ekiti",
                    "country": "Nigeria",
                    "postcode": 3476,
                    "coordinates":{
                        "latitude":"55.6425",
                        "longitude":"-21.3266" 
                    },
                    "timezone":{
                        "offset":"+4:30",
                        "description":"Kabul"
                    }
                },
                "email":"mokelang@yahoo.com",
                "login":{
                    "uuid":"498493474-4447-4224-4444-8475h7847834h",
                    "username":"wamstet",
                    "password": "tracey123",
                    "sale":"81i0wa09W",
                    "md5":"1172648544687468092bu4ud8yd83y98dbhc",
                    "sha1":"997659947he7huyywe7yhweuysduiy7ee7te7edg8ew",
                    "sha256":"b237ydysh848h8he8rhuhd8he8h89hd8hdhd8e8hd8dh8dh8dh8dhdhd"
                },
                "dob":{
                    "date":"1948-11-09T21:27:30.452Z",
                    "age":72
                },
                "registered":{
                    "date":"2001-09-09T21:02:30.4928",
                    "age":19
                },
                "phone":"3979475498",
                "cell":"472658287479",
                "id":{
                    "name":"FN",
                    "value":"0484784094290"
                },
                "picture":{
                    "large":<img src="" alt="pic1" />,
                    "medium":<img src="" alt="pic2" />
                }
            }
    ]

    static getContactlist(){
        return this.contactList;
    }
}

export default ContactService;