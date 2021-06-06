import { Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./UserItem.css"

function UserItem({ info, el }) {
    return (
        <div>
            <Card
            className="usercard"
                style={{
                    width: "18rem",
                    background: "gold",
                    color: "grey",
                    height: "450px",
                    marginTop: "20px",
                }}
            >
                <Card.Body>
                    <Card.Title> <img src="https://www.freeiconspng.com/uploads/go-back--gallery-for--contact-person-icon-png-21.png" width="30px" alt="contact"/> {info.name}</Card.Title>
                    <Card.Text>
                        <b>Username :</b> {info.username}
                    </Card.Text>
                    <hr />

                    <Card.Text>
                        <b>Company :</b> {info.company.name}
                    </Card.Text>
                    <hr />
                    <Card.Text>
                        <b>Catch phrase :</b> {info.company.catchPhrase}
                    </Card.Text>

                    <hr />
                    <Card.Text>
                        <b>Phone :</b> {info.phone}
                    </Card.Text>
                    <Card.Text>
                        <hr />
                        <b>Adress : </b> {info.address.street}
                    </Card.Text>
                    <Card.Text>
                        <b>Zip code :</b>
                        {info.address.zipcode}
                    </Card.Text>
                </Card.Body>
                <Card.Footer>
                    {" "}
                    <Card.Link href="#">{info.email}</Card.Link>
                </Card.Footer>
            </Card>
        </div>
    );
}

export default UserItem;
