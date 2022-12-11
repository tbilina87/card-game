import * as React from "react";
import { URL } from '../../constants';
import { useAvailableCards } from "../../hooks";
import { ListOfCards } from "./ListOfCards";
import styled from 'styled-components';

const Form = styled.form`
    display: flex;
    flex-direction: column;
    width: 700px;
`;

const Input = styled.input`
    display: block;
    width: 300px;
`;

const Button = styled.button`
    width: 200px; 
    margin: 20px 0;
`;

export const AdminPage = () => {
    const data = useAvailableCards();

    return <>
        <h1>Game Admin UI</h1>
        <div>
            <Form action={URL} method="POST">
                <label>
                    Superhero name:
                    <Input type='text' name='name' required />
                </label>
                <label>
                    Superhero attack score:
                    <Input type='number' name='attackScore' required />
                </label>
                <label>
                    Superhero defense score:
                    <Input type='number' name='defenseScore' required />
                </label>
                <Button type="submit">Add superhero</Button>
            </Form>

            {data && data.length > 1 ? <ListOfCards {...data} /> : <div>Failed to load list of cards. Try to refresh again.</div>}
        </div>
    </>
}
