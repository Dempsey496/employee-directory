import React, { useEffect, useState } from 'react';
import axios from "axios";
import Table from "../components/table/Table";
import SortButton from '../components/sortButton/SortButton';


const Home = () => {
    const [employees, setEmployees] = useState([
        // {
        //     "gender": "male",
        //     "name": {
        //         "title": "Mr",
        //         "first": "Armando",
        //         "last": "Castillo"
        //     },
        //     "location": {
        //         "street": {
        //             "number": 4259,
        //             "name": "Eason Rd"
        //         },
        //         "city": "Woodbridge",
        //         "state": "Maryland",
        //         "country": "United States",
        //         "postcode": 22151,
        //         "coordinates": {
        //             "latitude": "-8.2220",
        //             "longitude": "-101.8891"
        //         },
        //         "timezone": {
        //             "offset": "+6:00",
        //             "description": "Almaty, Dhaka, Colombo"
        //         }
        //     },
        //     "email": "armando.castillo@example.com",
        //     "login": {
        //         "uuid": "02c63f62-6ff9-4029-8e67-ccdcdca0d32a",
        //         "username": "greenladybug830",
        //         "password": "toshiba",
        //         "salt": "A00KdkLI",
        //         "md5": "e3cb1d1129950aa8b51feb327377cce0",
        //         "sha1": "629f48158a0fe8a32867b67f13f62457e97fb10c",
        //         "sha256": "5d67bea2758f1376de541630d12aeeab5da67930284a5eba61ad3c2267c22428"
        //     },
        //     "dob": {
        //         "date": "1987-10-24T23:32:32.027Z",
        //         "age": 34
        //     },
        //     "registered": {
        //         "date": "2017-02-25T09:42:55.627Z",
        //         "age": 4
        //     },
        //     "phone": "(876)-082-1640",
        //     "cell": "(555)-673-4948",
        //     "id": {
        //         "name": "SSN",
        //         "value": "260-29-0710"
        //     },
        //     "picture": {
        //         "large": "https://randomuser.me/api/portraits/men/80.jpg",
        //         "medium": "https://randomuser.me/api/portraits/med/men/80.jpg",
        //         "thumbnail": "https://randomuser.me/api/portraits/thumb/men/80.jpg"
        //     },
        //     "nat": "US"
        // },
        // {
        //     "gender": "male",
        //     "name": {
        //         "title": "Mr",
        //         "first": "Nelson",
        //         "last": "Carr"
        //     },
        //     "location": {
        //         "street": {
        //             "number": 7763,
        //             "name": "Photinia Ave"
        //         },
        //         "city": "Burkburnett",
        //         "state": "Ohio",
        //         "country": "United States",
        //         "postcode": 46377,
        //         "coordinates": {
        //             "latitude": "-3.2863",
        //             "longitude": "-170.7598"
        //         },
        //         "timezone": {
        //             "offset": "+10:00",
        //             "description": "Eastern Australia, Guam, Vladivostok"
        //         }
        //     },
        //     "email": "nelson.carr@example.com",
        //     "login": {
        //         "uuid": "888ab67f-6d4a-404f-8b11-b4b1fc91b653",
        //         "username": "whiterabbit364",
        //         "password": "here",
        //         "salt": "unqSbWnL",
        //         "md5": "a44781ae6a4783887c9148738b238f91",
        //         "sha1": "11cd6b7592305c16001bfb4fe3000ae95f13a59a",
        //         "sha256": "1646c10146857db8854b672e265bfe56eef6b3e11e4e265ef9924472f2dc1e48"
        //     },
        //     "dob": {
        //         "date": "1953-07-07T16:54:04.483Z",
        //         "age": 68
        //     },
        //     "registered": {
        //         "date": "2009-11-06T14:40:23.050Z",
        //         "age": 12
        //     },
        //     "phone": "(134)-525-7517",
        //     "cell": "(659)-661-0093",
        //     "id": {
        //         "name": "SSN",
        //         "value": "853-06-7975"
        //     },
        //     "picture": {
        //         "large": "https://randomuser.me/api/portraits/men/18.jpg",
        //         "medium": "https://randomuser.me/api/portraits/med/men/18.jpg",
        //         "thumbnail": "https://randomuser.me/api/portraits/thumb/men/18.jpg"
        //     },
        //     "nat": "US"
        // },
        // {
        //     "gender": "female",
        //     "name": {
        //         "title": "Ms",
        //         "first": "Alexa",
        //         "last": "Bishop"
        //     },
        //     "location": {
        //         "street": {
        //             "number": 6242,
        //             "name": "Hunters Creek Dr"
        //         },
        //         "city": "Abilene",
        //         "state": "Alaska",
        //         "country": "United States",
        //         "postcode": 49857,
        //         "coordinates": {
        //             "latitude": "-42.8346",
        //             "longitude": "80.0272"
        //         },
        //         "timezone": {
        //             "offset": "+5:45",
        //             "description": "Kathmandu"
        //         }
        //     },
        //     "email": "alexa.bishop@example.com",
        //     "login": {
        //         "uuid": "0c396ec4-2622-4679-b9c8-3b99faa210f4",
        //         "username": "yellowmeercat727",
        //         "password": "gordo",
        //         "salt": "X6VDXLCQ",
        //         "md5": "d40825f360bca8b43ffdc5dc029b1b19",
        //         "sha1": "56042173331af5aead98448b81ca0b1331b2fed7",
        //         "sha256": "387530c1823e05b3dbe62b16afa33ff4ab806c0a36379552710cce950e2d7327"
        //     },
        //     "dob": {
        //         "date": "1998-05-29T00:16:34.841Z",
        //         "age": 23
        //     },
        //     "registered": {
        //         "date": "2004-12-14T23:41:52.858Z",
        //         "age": 17
        //     },
        //     "phone": "(439)-803-8545",
        //     "cell": "(110)-456-3099",
        //     "id": {
        //         "name": "SSN",
        //         "value": "162-48-5285"
        //     },
        //     "picture": {
        //         "large": "https://randomuser.me/api/portraits/women/86.jpg",
        //         "medium": "https://randomuser.me/api/portraits/med/women/86.jpg",
        //         "thumbnail": "https://randomuser.me/api/portraits/thumb/women/86.jpg"
        //     },
        //     "nat": "US"
        // },
        // {
        //     "gender": "female",
        //     "name": {
        //         "title": "Miss",
        //         "first": "Phyllis",
        //         "last": "Mckinney"
        //     },
        //     "location": {
        //         "street": {
        //             "number": 7793,
        //             "name": "Ash Dr"
        //         },
        //         "city": "Roseville",
        //         "state": "Michigan",
        //         "country": "United States",
        //         "postcode": 96806,
        //         "coordinates": {
        //             "latitude": "55.7858",
        //             "longitude": "6.5996"
        //         },
        //         "timezone": {
        //             "offset": "-1:00",
        //             "description": "Azores, Cape Verde Islands"
        //         }
        //     },
        //     "email": "phyllis.mckinney@example.com",
        //     "login": {
        //         "uuid": "50aceb94-a01c-4b96-807c-ec7c97a6f9bf",
        //         "username": "ticklishwolf770",
        //         "password": "arkansas",
        //         "salt": "WzJ0a4JV",
        //         "md5": "61537d33833fa688bfd5c56abcae9f42",
        //         "sha1": "7dc194c7b3f3ccf6eee7bb4e7d7f7e6a71e8523c",
        //         "sha256": "db3a5eb9964e88dc78b460a5f8b15ab4002096c0f048b2f148b8fdbbe0096484"
        //     },
        //     "dob": {
        //         "date": "1984-08-08T11:42:00.217Z",
        //         "age": 37
        //     },
        //     "registered": {
        //         "date": "2010-08-15T03:09:03.880Z",
        //         "age": 11
        //     },
        //     "phone": "(423)-303-5196",
        //     "cell": "(608)-087-3258",
        //     "id": {
        //         "name": "SSN",
        //         "value": "017-90-9952"
        //     },
        //     "picture": {
        //         "large": "https://randomuser.me/api/portraits/women/1.jpg",
        //         "medium": "https://randomuser.me/api/portraits/med/women/1.jpg",
        //         "thumbnail": "https://randomuser.me/api/portraits/thumb/women/1.jpg"
        //     },
        //     "nat": "US"
        // },
        // {
        //     "gender": "male",
        //     "name": {
        //         "title": "Mr",
        //         "first": "Arthur",
        //         "last": "Carlson"
        //     },
        //     "location": {
        //         "street": {
        //             "number": 200,
        //             "name": "Fincher Rd"
        //         },
        //         "city": "Steilacoom",
        //         "state": "South Dakota",
        //         "country": "United States",
        //         "postcode": 34976,
        //         "coordinates": {
        //             "latitude": "-61.8717",
        //             "longitude": "141.6348"
        //         },
        //         "timezone": {
        //             "offset": "+4:00",
        //             "description": "Abu Dhabi, Muscat, Baku, Tbilisi"
        //         }
        //     },
        //     "email": "arthur.carlson@example.com",
        //     "login": {
        //         "uuid": "65fd15d8-7933-4179-a51e-f3a37c84d8e9",
        //         "username": "crazycat685",
        //         "password": "flowers",
        //         "salt": "UunXIqTX",
        //         "md5": "b305cb8e884b1d25ab8276c23ef4e320",
        //         "sha1": "0ca1f122be66152c62823b35cb674b9c368bfe8d",
        //         "sha256": "3a5b724f5c5b21afc606d7b0c26e168e20c2e30d48b00bd5dbcae6012f9cc972"
        //     },
        //     "dob": {
        //         "date": "1958-01-13T22:35:09.142Z",
        //         "age": 63
        //     },
        //     "registered": {
        //         "date": "2012-01-11T20:51:52.799Z",
        //         "age": 9
        //     },
        //     "phone": "(207)-742-9695",
        //     "cell": "(244)-970-1362",
        //     "id": {
        //         "name": "SSN",
        //         "value": "955-21-8238"
        //     },
        //     "picture": {
        //         "large": "https://randomuser.me/api/portraits/men/7.jpg",
        //         "medium": "https://randomuser.me/api/portraits/med/men/7.jpg",
        //         "thumbnail": "https://randomuser.me/api/portraits/thumb/men/7.jpg"
        //     },
        //     "nat": "US"
        // },
        // {
        //     "gender": "female",
        //     "name": {
        //         "title": "Mrs",
        //         "first": "Kitty",
        //         "last": "Diaz"
        //     },
        //     "location": {
        //         "street": {
        //             "number": 2507,
        //             "name": "Miller Ave"
        //         },
        //         "city": "Cedar Rapids",
        //         "state": "Florida",
        //         "country": "United States",
        //         "postcode": 59339,
        //         "coordinates": {
        //             "latitude": "49.3656",
        //             "longitude": "26.5930"
        //         },
        //         "timezone": {
        //             "offset": "-9:00",
        //             "description": "Alaska"
        //         }
        //     },
        //     "email": "kitty.diaz@example.com",
        //     "login": {
        //         "uuid": "46c0c6fc-69f0-4e9c-9dfb-b7073551492e",
        //         "username": "lazyswan576",
        //         "password": "singer",
        //         "salt": "2Oc8p5Iu",
        //         "md5": "e09df7ec4bfbd2459dd31d4692c64164",
        //         "sha1": "0d0c3a75ad254bae2352132a9c850035f6c727b3",
        //         "sha256": "5f7452b71ed39a622aef07e3e74d70d8004daa3494cf35e59d30acebbd185d9d"
        //     },
        //     "dob": {
        //         "date": "1994-04-21T02:21:59.910Z",
        //         "age": 27
        //     },
        //     "registered": {
        //         "date": "2004-07-12T21:09:01.995Z",
        //         "age": 17
        //     },
        //     "phone": "(677)-440-0986",
        //     "cell": "(200)-491-7878",
        //     "id": {
        //         "name": "SSN",
        //         "value": "364-59-2809"
        //     },
        //     "picture": {
        //         "large": "https://randomuser.me/api/portraits/women/12.jpg",
        //         "medium": "https://randomuser.me/api/portraits/med/women/12.jpg",
        //         "thumbnail": "https://randomuser.me/api/portraits/thumb/women/12.jpg"
        //     },
        //     "nat": "US"
        // },
        // {
        //     "gender": "female",
        //     "name": {
        //         "title": "Ms",
        //         "first": "Teresa",
        //         "last": "Chambers"
        //     },
        //     "location": {
        //         "street": {
        //             "number": 6754,
        //             "name": "Marsh Ln"
        //         },
        //         "city": "Red Oak",
        //         "state": "Kentucky",
        //         "country": "United States",
        //         "postcode": 72445,
        //         "coordinates": {
        //             "latitude": "24.6145",
        //             "longitude": "50.5496"
        //         },
        //         "timezone": {
        //             "offset": "+10:00",
        //             "description": "Eastern Australia, Guam, Vladivostok"
        //         }
        //     },
        //     "email": "teresa.chambers@example.com",
        //     "login": {
        //         "uuid": "0d1dc548-d12b-4f1f-b931-311904dd4c53",
        //         "username": "purplekoala529",
        //         "password": "clippers",
        //         "salt": "NLY6zqIF",
        //         "md5": "9bee99dbd95b7659bb500536b3953ee0",
        //         "sha1": "f499bf0e7aa6e8863f454207173aa19218515636",
        //         "sha256": "61a5418d49327d6e894619aab27f9c417f5a01124978f23b5e274a6110f8ebb4"
        //     },
        //     "dob": {
        //         "date": "1986-03-29T00:33:35.038Z",
        //         "age": 35
        //     },
        //     "registered": {
        //         "date": "2008-01-27T23:44:07.643Z",
        //         "age": 13
        //     },
        //     "phone": "(905)-246-4324",
        //     "cell": "(964)-610-2209",
        //     "id": {
        //         "name": "SSN",
        //         "value": "800-03-1705"
        //     },
        //     "picture": {
        //         "large": "https://randomuser.me/api/portraits/women/69.jpg",
        //         "medium": "https://randomuser.me/api/portraits/med/women/69.jpg",
        //         "thumbnail": "https://randomuser.me/api/portraits/thumb/women/69.jpg"
        //     },
        //     "nat": "US"
        // },
        // {
        //     "gender": "female",
        //     "name": {
        //         "title": "Ms",
        //         "first": "Paula",
        //         "last": "Garcia"
        //     },
        //     "location": {
        //         "street": {
        //             "number": 3454,
        //             "name": "W Campbell Ave"
        //         },
        //         "city": "Worcester",
        //         "state": "Arizona",
        //         "country": "United States",
        //         "postcode": 67484,
        //         "coordinates": {
        //             "latitude": "54.7461",
        //             "longitude": "19.7079"
        //         },
        //         "timezone": {
        //             "offset": "+5:45",
        //             "description": "Kathmandu"
        //         }
        //     },
        //     "email": "paula.garcia@example.com",
        //     "login": {
        //         "uuid": "4bc542a3-8131-4cb7-8fae-8467fc02593e",
        //         "username": "greenmouse826",
        //         "password": "charlie123",
        //         "salt": "pzchgXvl",
        //         "md5": "64ceb9d160c8259331566f4b10e5f15c",
        //         "sha1": "500cc2fe4f88c48c57b77a713e4cbe29cd1f580f",
        //         "sha256": "55d7266f1f46486f00c330ecf5232134f52cd551c1e189391f8751324cdc8004"
        //     },
        //     "dob": {
        //         "date": "1984-09-28T17:38:15.487Z",
        //         "age": 37
        //     },
        //     "registered": {
        //         "date": "2005-09-05T12:59:53.432Z",
        //         "age": 16
        //     },
        //     "phone": "(714)-257-3891",
        //     "cell": "(581)-891-1093",
        //     "id": {
        //         "name": "SSN",
        //         "value": "321-11-4368"
        //     },
        //     "picture": {
        //         "large": "https://randomuser.me/api/portraits/women/68.jpg",
        //         "medium": "https://randomuser.me/api/portraits/med/women/68.jpg",
        //         "thumbnail": "https://randomuser.me/api/portraits/thumb/women/68.jpg"
        //     },
        //     "nat": "US"
        // },
        // {
        //     "gender": "female",
        //     "name": {
        //         "title": "Ms",
        //         "first": "Ella",
        //         "last": "Barnett"
        //     },
        //     "location": {
        //         "street": {
        //             "number": 377,
        //             "name": "Forest Ln"
        //         },
        //         "city": "West Covina",
        //         "state": "Utah",
        //         "country": "United States",
        //         "postcode": 75861,
        //         "coordinates": {
        //             "latitude": "9.7648",
        //             "longitude": "18.1578"
        //         },
        //         "timezone": {
        //             "offset": "+3:00",
        //             "description": "Baghdad, Riyadh, Moscow, St. Petersburg"
        //         }
        //     },
        //     "email": "ella.barnett@example.com",
        //     "login": {
        //         "uuid": "32d36d9c-8361-4482-a8da-0f4e85d8d8e2",
        //         "username": "yellowleopard517",
        //         "password": "383838",
        //         "salt": "Dk2VWUn0",
        //         "md5": "b94fb9bb84f7fc65fec0c475277da6a9",
        //         "sha1": "0527be23154e726a4bc6d188b5d3d9772de6a832",
        //         "sha256": "3aaed2ec3676e76cef2eeba9136fbe3ce530a0e4964ddc32754cdf407d4b7b7f"
        //     },
        //     "dob": {
        //         "date": "1981-01-03T23:25:21.018Z",
        //         "age": 40
        //     },
        //     "registered": {
        //         "date": "2016-02-04T08:00:31.086Z",
        //         "age": 5
        //     },
        //     "phone": "(391)-759-3217",
        //     "cell": "(098)-219-5218",
        //     "id": {
        //         "name": "SSN",
        //         "value": "086-24-2262"
        //     },
        //     "picture": {
        //         "large": "https://randomuser.me/api/portraits/women/79.jpg",
        //         "medium": "https://randomuser.me/api/portraits/med/women/79.jpg",
        //         "thumbnail": "https://randomuser.me/api/portraits/thumb/women/79.jpg"
        //     },
        //     "nat": "US"
        // },
        // {
        //     "gender": "male",
        //     "name": {
        //         "title": "Mr",
        //         "first": "Scott",
        //         "last": "Ross"
        //     },
        //     "location": {
        //         "street": {
        //             "number": 771,
        //             "name": "Robinson Rd"
        //         },
        //         "city": "Sunnyvale",
        //         "state": "Missouri",
        //         "country": "United States",
        //         "postcode": 16886,
        //         "coordinates": {
        //             "latitude": "-66.2181",
        //             "longitude": "45.6155"
        //         },
        //         "timezone": {
        //             "offset": "+6:00",
        //             "description": "Almaty, Dhaka, Colombo"
        //         }
        //     },
        //     "email": "scott.ross@example.com",
        //     "login": {
        //         "uuid": "bb7701ed-b310-47f2-bebd-5968f3c1faee",
        //         "username": "brownbutterfly654",
        //         "password": "dusty1",
        //         "salt": "FUEjGJGu",
        //         "md5": "64fcc7e6722fbc9e9091457b02cfcf29",
        //         "sha1": "606481426677b7d638378fd4d341d75978967dd0",
        //         "sha256": "0862b9b1b51fa4ee9ab515a406724fd980efa2cd50a4d698a74f2d270cda59ac"
        //     },
        //     "dob": {
        //         "date": "1986-02-02T01:01:53.689Z",
        //         "age": 35
        //     },
        //     "registered": {
        //         "date": "2006-07-19T05:02:15.990Z",
        //         "age": 15
        //     },
        //     "phone": "(923)-236-2941",
        //     "cell": "(029)-726-5850",
        //     "id": {
        //         "name": "SSN",
        //         "value": "127-97-2650"
        //     },
        //     "picture": {
        //         "large": "https://randomuser.me/api/portraits/men/88.jpg",
        //         "medium": "https://randomuser.me/api/portraits/med/men/88.jpg",
        //         "thumbnail": "https://randomuser.me/api/portraits/thumb/men/88.jpg"
        //     },
        //     "nat": "US"
        // }

    ]);

    // for (let i = 0; i < employees.length; i++) {
        
    //     console.log(employees[i].name.first)
    // }

    useEffect(() => {
        axios
            .get(
                "https://randomuser.me/api/?results=10&nat=US"
            )
            .then((response) => {
                console.log(response.data.results);
                setEmployees(response.data.results);

            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const sortByFirstName = (e) => {
        e.preventDefault();
        setEmployees(employees.sort((a, b) => a.name.first.localeCompare(b.name.first, 'es', { sensitivity: 'base' })));
        console.log("clicked");
    }

    return (
        <div className="container">
            <div className="row">
            <button onClick={sortByFirstName} type="button" className="btn btn-outline-dark">Sort by First Name</button>
            </div>
            <div className="row">
                <table className="table table-dark table-striped">
                    <thead>
                        <tr>
                            <th scope="col">Picture</th>
                            <th scope="col">Name</th>
                            <th scope="col">Phone Number</th>
                            <th scope="col">Email</th>
                            <th scope="col">Location</th>
                            <th scope="col">DOB</th>
                        </tr>
                    </thead>
                    {employees.map((employee) => (
                        <Table key={employee.id.value} picture={employee.picture.thumbnail} firstName={employee.name.first} lastName={employee.name.last} city={employee.location.city} state={employee.location.state} email={employee.email} phone={employee.phone} dob={employee.dob.date} />
                    ))}
                </table>

            </div>
        </div>
    );
};

export default Home;