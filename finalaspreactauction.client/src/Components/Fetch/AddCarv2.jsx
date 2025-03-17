import axios from "axios";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';

function AddCar() {
    const [response, setResponse] = useState(null);
    const [year, setYear] = useState("");
    const [makeId, setMakeId] = useState("");
    const [modelId, setModelId] = useState("");
    const [vin, setVin] = useState("");
    const [damage, setDamage] = useState("");
    const [otometer, setOtometer] = useState("");
    const [engine, setEngine] = useState("");
    const [fuelType, setFuelType] = useState("");
    const [branch, setBranch] = useState("");
    const [cylinder, setCylinder] = useState("");
    const [key, setKey] = useState("");
    const [country, setCountry] = useState("");
    const [saleDocument, setSaleDocument] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");

    const [makes, setMakes] = useState([]);
    const [models, setModels] = useState([]);

    useEffect(() => {
        // Fetch makes from the API
        axios.get("https://localhost:7038/api/Brand/GetAll")
            .then((res) => {
                setMakes(res.data);
            })
            .catch((err) => {
                console.error(err);
            });
    }, []);

    useEffect(() => {
        if (makeId) {
            // Fetch models based on the selected make
            axios.get(`https://localhost:7038/api/Model/GetById?${makeId}`)
                .then((res) => {
                    setModels(res.data);
                })
                .catch((err) => {
                    console.error(err);
                });
        }
    }, [makeId]);

    async function handlePost(e) {
        e.preventDefault();

        const car = {
            year: year,
            ModelId: modelId,
            MakeId: makeId,
            vin: vin,
            damage: damage,
            otometer: otometer,
            engine: engine,
            fuelType: fuelType,
            branch: branch,
            cylinder: cylinder,
            key: key,
            country: country,
            saleDocument: saleDocument,
            description: description,
            price: parseFloat(price),
        };

        try {
            const res = await axios.post("https://localhost:7038/api/Car/AddNewCar", car, {
                headers: {
                    "Content-Type": "application/json",
                },
            });

            if (res.status === 200) {
                console.log(res.data);
                setResponse(res.data);
            }
        } catch (err) {
            console.error(err);
            if (err.response) {
                console.log(err.response.data);
            }
        }
    }

    return (
        <div>
            <h3>Add New Car</h3>
            <Form onSubmit={handlePost} className="forEdit">
                <Form.Group className="mb-3" controlId="formBasicName" style={{ padding: "0 5px" }}>
                    <Form.Label style={{ fontFamily: "sans-serif" }}>Year</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Year"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        required
                    />
                </Form.Group>

                {/* Make Dropdown */}
                <Form.Group className="mb-3" controlId="formBasicMake" style={{ padding: "0 5px" }}>
                    <Form.Label>Make</Form.Label>
                    <Form.Control
                        as="select"
                        value={makeId}
                        onChange={(e) => setMakeId(e.target.value)}
                    >
                        <option value="">Select Make</option>
                        {makes.map((make) => (
                            <option key={make.id} value={make.id}>{make.name}</option>
                        ))}
                    </Form.Control>
                </Form.Group>

                {/* Model Dropdown */}
                <Form.Group className="mb-3" controlId="formBasicModel" style={{ padding: "0 5px" }}>
                    <Form.Label>Model</Form.Label>
                    <Form.Control
                        as="select"
                        value={modelId}
                        onChange={(e) => setModelId(e.target.value)}
                    >
                        <option value="">Select Model</option>
                        {models.map((model) => (
                            <option key={model.id} value={model.id}>{model.name}</option>
                        ))}
                    </Form.Control>
                </Form.Group>

                {/* Other Form Fields */}
                <Form.Group className="mb-3" controlId="formBasicVin" style={{ padding: "0 5px" }}>
                    <Form.Label>Vin</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Vin"
                        value={vin}
                        onChange={(e) => setVin(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDamage" style={{ padding: "0 5px" }}>
                    <Form.Label>Damage</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Damage"
                        value={damage}
                        onChange={(e) => setDamage(e.target.value)}
                    />
                </Form.Group>

                {/* Continue with the rest of your form fields... */}

                <Button
                    variant="primary"
                    type="submit"
                    style={{ display: "block", width: "50%", margin: "0 auto" }}
                >
                    Submit
                </Button>
            </Form>

            {response && (
                <div>
                    <h3>Car Added Successfully</h3>
                    <p>Name: {response.name}</p>
                    <p>Description: {response.description}</p>
                </div>
            )}
        </div>
    );
}

export default AddCar;
