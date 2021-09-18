import React, { useCallback, useState } from 'react'
import Count from './Count';
import Button from './Butoon';
export function ComponentA(props) {

    const [age, setAge] = useState(25);
    const [salary, setSalary] = useState(25000)

    const increaseAge = useCallback(() => {
        console.log('Age increase called');
        setAge(age + 1)
    },[age])

    const increaseSalary = useCallback(() => {
        console.log('Salary increase called');
        setSalary(salary + 5000)
    },[salary])

    return (
        <>
            <Count text="Age" value={age} />
            <Button handleClick={increaseAge}>Increase Age</Button>
            <Count text="Salary" value={salary} />
            <Button handleClick={increaseSalary}>Increase Salary</Button>
        </>
    )
}
