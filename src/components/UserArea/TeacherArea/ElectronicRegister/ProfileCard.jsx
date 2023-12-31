import React from 'react'
import { Card, Image } from 'react-bootstrap'
import TeacherMainCard from './TeacherMainCard'

const ProfileCard = ({ Teacher }) => {
    return (
        <>
            <Card style={{border: 'none ', backgroundColor:'#ebebeb ', minHeight: '100vh'}}>
                <div className="text-black d-flex flex-row" style={{ backgroundColor: '#f8f9fa', height: '180px' }}>
                    <div className="ms-4 d-flex flex-column" style={{ width: '150px' }}>
                        <Image src="https://scontent-mxp1-1.xx.fbcdn.net/v/t1.6435-9/61325188_10211278807886089_6079207078533005312_n.jpg?_nc_cat=103&cb=99be929b-3346023f&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=yomORzSQZD4AX9rqYku&_nc_ht=scontent-mxp1-1.xx&oh=00_AfC4D8QZKne7vrtfIdkiLKrTnHFBM3jMK57uLJJNMGN6fw&oe=64D4EE8A"
                            alt="immagine" className="mt-5 mb-2" fluid style={{ width: '150px', zIndex: '1' }} thumbnail />
                    </div>
                    {
                        Teacher && (
                            <div className="ms-5 me-2 mt-5 ps-5 ">
                                <Card.Title tag="h5" style={{fontSize:'21px',  color:'#3c3c3c'}}>{Teacher.teacher.name + ' ' + Teacher.teacher.surname}</Card.Title>
                                <Card.Text className="font-italic mb-1" style={{fontSize:'21px',  color:'#3c3c3c'}}>{Teacher.teacher.email}</Card.Text>
                                <Card.Text className="font-italic mb-1" style={{fontSize:'21px',  color:'#3c3c3c'}}>{Teacher.teacher.role}</Card.Text>
                            </div>
                        )
                    }
                </div>
                <Card.Body className="text-black p-4">
                    <Card.Text className="font-italic mb-3" style={{fontSize:'21px',  color:'#3c3c3c'}}>CLASSI ASSOCIATE</Card.Text>
                    {
                        Teacher && Teacher.teacher?.class_group?.classes.map((item) => {
                            return (
                                <TeacherMainCard
                                    idClass={item._id}
                                    section={item.class.section}
                                    Teacher={Teacher}
                                />
                            )
                        })
                    }
                </Card.Body>
            </Card>
        </>
    );
}

export default ProfileCard