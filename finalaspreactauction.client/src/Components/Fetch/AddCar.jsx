import axios from "axios";
import { useEffect, useState } from "react";
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
        axios.get("https://localhost:7038/api/Brand/GetAll")
            .then((res) => { setMakes(res.data) })
    }, [])


    useEffect(() => {
        if (makeId) {
            axios.get(`https://localhost:7038/api/Model/GetByMakeId?id=${makeId}`)
                .then((res) => {
                    setModels(res.data)
                })
        }
    }, [makeId])

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
            <h3>Add New Make</h3>
            <Form onSubmit={handlePost} className="forEdit">
                <Form.Group className="mb-3" controlId="formBasicName" style={{ padding: "0 5px" }}>
                    <Form.Label style={{ fontFamily: "sans-serif" }}>Year</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Name"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        required
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicDescription" style={{ padding: "0 5px" }}>
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </Form.Group>

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

                <Form.Group className="mb-3" controlId="formBasicOtometer" style={{ padding: "0 5px" }}>
                    <Form.Label>Otometer</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Otometer"
                        value={otometer}
                        onChange={(e) => setOtometer(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicBranch" style={{ padding: "0 5px" }}>
                    <Form.Label>Branch</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Branch"
                        value={branch}
                        onChange={(e) => setBranch(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEngine" style={{ padding: "0 5px" }}>
                    <Form.Label>Engine</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Engine"
                        value={engine}
                        onChange={(e) => setEngine(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicKey" style={{ padding: "0 5px" }}>
                    <Form.Label>Key</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Key"
                        value={key}
                        onChange={(e) => setKey(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCountry" style={{ padding: "0 5px" }}>
                    <Form.Label>Country</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Country"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPrice" style={{ padding: "0 5px" }}>
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Description"
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicSaleDocument" style={{ padding: "0 5px" }}>
                    <Form.Label>Sale Document</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Sale Document"
                        value={saleDocument}
                        onChange={(e) => setSaleDocument(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicFuelType" style={{ padding: "0 5px" }}>
                    <Form.Label>Fuel Type</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Fuel"
                        value={fuelType}
                        onChange={(e) => setFuelType(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicCylinder" style={{ padding: "0 5px" }}>
                    <Form.Label>Cylinder</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter Cylinder"
                        value={cylinder}
                        onChange={(e) => setCylinder(e.target.value)}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicMake" style={{ padding: "0 5px" }}>
                    <Form.Label>Make</Form.Label>
                    <Form.Control
                        as="select"
                        placeholder="Enter Make"
                        value={makeId}
                        onChange={(e) => setMakeId(e.target.value)}
                    >
                        <option value="">Select Make</option>
                        {makes.map((make) => (
                            <option key={make.id} value={make.id}>{make.name}</option>
                        ))}
                    </Form.Control>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicModel" style={{ padding: "0 5px" }}>
                    <Form.Label>Model</Form.Label>
                    <Form.Control
                        as="select"
                        placeholder="Enter Model"
                        value={modelId}
                        onChange={(e) => setModelId(e.target.value)}
                    >
                        <option value="">Select Make</option>
                        {models.map((model) => (
                            <option key={model.id} value={model.id}>{model.name}</option>
                        ))}
                    </Form.Control>
                </Form.Group>

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
                    <h3>Make Added Successfully</h3>
                    <p>Name: {response.name}</p>
                    <p>Description: {response.description}</p>
                </div>
            )}
        </div>
    );
}

export default AddCar;