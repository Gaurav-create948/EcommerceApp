import './choose-gift.css';
import { useState } from 'react';
import Column from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';


function Choosegift() {
    const [min, setMin] = useState(100);
    const [max, setMax] = useState(20000);
    function handleSubmit(){
        console.log("i got clicked");
    }
    return (
        <Column lg={3} className="gift-category">
            <div className='choose-gift'>
                <h4>Filters</h4>
                <div className='gift-filter'>
                    <strong><p>Gifts For</p></strong>
                    <input type='checkbox' id="Birthday" />
                    <label>Male</label>
                    <br></br>
                    <input type='checkbox' id="Wedding" />
                    <label>Female</label>
                    <br></br>
                    <span>Kids</span>
                    <select>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                    <br></br>
                </div>
                <div className='price-filter'>
                    <p><strong>Price</strong></p>
                    <form action='/' method='post'>
                        <input type="number" name="min" placeholder='Min' />
                        <input type="number" name="max" placeholder='Max' />
                        <Button type="submit" className='btn btn-sm bg-white' onSubmit={handleSubmit}>Go</Button>
                    </form>
                </div>
            </div>
        </Column>
    );
}

export default Choosegift;