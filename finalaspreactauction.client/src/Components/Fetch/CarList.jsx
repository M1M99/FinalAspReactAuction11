import React, { useEffect, useState } from 'react';
import styled from "styled-components";

const CarList = () => {
    const [cars, setCars] = useState([]);
    const [makes, setMakes] = useState([]);
    const [models, setModels] = useState([]);
    const carUrl = "https://localhost:7038/api/Car/Cars";
    const makeUrl = "https://localhost:7038/api/Brand/GetAll"; 
    const modelUrl = "https://localhost:7038/api/Model/GetAllModel"; 

    useEffect(() => {
        fetch(carUrl)
            .then((response) => response.json())
            .then((res) => {
                setCars(res);
            })
            .catch((error) => {
                console.error("Error fetching car data:", error);
                setCars([]);
            });

        fetch(makeUrl)
            .then((response) => response.json())
            .then((res) => {
                setMakes(res); 
            })
            .catch((error) => {
                console.error("Error fetching makes data:", error);
                setMakes([]);
            });

        fetch(modelUrl)
            .then((response) => response.json())
            .then((res) => {
                setModels(res); 
            })
            .catch((error) => {
                console.error("Error fetching models data:", error);
                setModels([]);
            });
    }, []);

    const Container = styled.div`
        margin:0 10px;
        padding:0 10px;
        border-radius:3px;
        background-color:#8ecae6;
    `;

    const getMakeName = (makeId) => {
        const make = makes.find(m => m.id === makeId);
        return make ? make.name : "Unknown Make";
    };

    const getModelName = (modelId) => {
        const model = models.find(m => m.id === modelId);
        return model ? model.name : "Unknown Model";
    };

    return (
        <Container>
            {cars.length === 0 ? (
                <strong>Loading...</strong>
            ) : (
                cars.map((car) => (
                    <li key={car.id}>
                        <div>
                            <p style={{ color: "brown", fontWeight: "bold", lineHeight: "40px", letterSpacing: "1px", fontSize: "20px", margin: "7px" }}>
                                {car.id}. {getMakeName(car.makeId)} {getModelName(car.modelId)} {car.year}
                            </p>
                        </div>
                    </li>
                ))
            )}
        </Container>
    );
};

export default CarList;
