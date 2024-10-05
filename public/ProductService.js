// src/services/ProductService.js
export const CustomerService = {
    getCustomersLarge() {
        return new Promise((resolve) => {
            const products = [
                {
                    "id": 1000,
                    "name": "James Butt",
                    "country": {
                        "name": "Algeria",
                        "code": "dz"
                    },
                    "company": "Benton, John B Jr",
                    "date": "2015-09-13",
                    "status": "unqualified",
                    "verified": true,
                    "activity": 17,
                    "representative": {
                        "name": "Ioni Bowcher",
                        "image": "ionibowcher.png"
                    },
                    "balance": 70663
                },
                {
                    "id": 1001,
                    "name": "Josephine Darakjy",
                    "country": {
                        "name": "Egypt",
                        "code": "eg"
                    },
                    "company": "Chanay, Jeffrey A Esq",
                    "date": "2018-05-15",
                    "status": "qualified",
                    "verified": false,
                    "activity": 23,
                    "representative": {
                        "name": "Amy Elsner",
                        "image": "amyelsner.png"
                    },
                    "balance": 82456
                },
                {
                    "id": 1002,
                    "name": "Art Venere",
                    "country": {
                        "name": "Panama",
                        "code": "pa"
                    },
                    "company": "Chemel, James L Cpa",
                    "date": "2019-01-12",
                    "status": "new",
                    "verified": true,
                    "activity": 5,
                    "representative": {
                        "name": "Asiya Javayant",
                        "image": "asiyajavayant.png"
                    },
                    "balance": 28343
                },
                {
                    "id": 1003,
                    "name": "Lenna Paprocki",
                    "country": {
                        "name": "Slovenia",
                        "code": "si"
                    },
                    "company": "Feltz Printing Service",
                    "date": "2016-05-17",
                    "status": "negotiation",
                    "verified": false,
                    "activity": 12,
                    "representative": {
                        "name": "Xuxue Feng",
                        "image": "xuxuefeng.png"
                    },
                    "balance": 88521
                },
                {
                    "id": 1004,
                    "name": "Donette Foller",
                    "country": {
                        "name": "South Africa",
                        "code": "za"
                    },
                    "company": "Printing Dimensions",
                    "date": "2016-02-17",
                    "status": "renewal",
                    "verified": true,
                    "activity": 20,
                    "representative": {
                        "name": "Xiuxiu Lavender",
                        "image": "xiuxiulavender.png"
                    },
                    "balance": 33572
                },
                {
                    "id": 1005,
                    "name": "Simona Morasca",
                    "country": {
                        "name": "Chile",
                        "code": "cl"
                    },
                    "company": "Chapman, Ross E Esq",
                    "date": "2018-02-23",
                    "status": "unqualified",
                    "verified": false,
                    "activity": 6,
                    "representative": {
                        "name": "Ivan Magalhaes",
                        "image": "ivanmagalhaes.png"
                    },
                    "balance": 62541
                },
                {
                    "id": 1006,
                    "name": "Mitsue Tollner",
                    "country": {
                        "name": "France",
                        "code": "fr"
                    },
                    "company": "Morlong Associates",
                    "date": "2018-02-19",
                    "status": "qualified",
                    "verified": true,
                    "activity": 9,
                    "representative": {
                        "name": "Onyama Limba",
                        "image": "onyamalimba.png"
                    },
                    "balance": 87563
                },
                {
                    "id": 1007,
                    "name": "Leota Dilliard",
                    "country": {
                        "name": "Germany",
                        "code": "de"
                    },
                    "company": "Commercial Press",
                    "date": "2019-08-20",
                    "status": "negotiation",
                    "verified": false,
                    "activity": 14,
                    "representative": {
                        "name": "Ioni Bowcher",
                        "image": "ionibowcher.png"
                    },
                    "balance": 45263
                },
                {
                    "id": 1008,
                    "name": "Sage Wieser",
                    "country": {
                        "name": "Spain",
                        "code": "es"
                    },
                    "company": "Truhlar And Truhlar Attys",
                    "date": "2018-11-21",
                    "status": "renewal",
                    "verified": true,
                    "activity": 8,
                    "representative": {
                        "name": "Amy Elsner",
                        "image": "amyelsner.png"
                    },
                    "balance": 15876
                },
                {
                    "id": 1009,
                    "name": "Kris Marrier",
                    "country": {
                        "name": "Brazil",
                        "code": "br"
                    },
                    "company": "King, Christopher A Esq",
                    "date": "2015-07-07",
                    "status": "new",
                    "verified": false,
                    "activity": 2,
                    "representative": {
                        "name": "Asiya Javayant",
                        "image": "asiyajavayant.png"
                    },
                    "balance": 48741
                }
            ];            
            resolve(products);
        });
    }
};
