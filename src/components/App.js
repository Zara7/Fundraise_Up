import React from 'react';

import search from '../assets/images/search.svg';
import dollarSign from "../assets/images/dollar-sign.svg";
import success from "../assets/images/success_icon.svg";
import repeat from "../assets/images/repeat.svg";
import wallet from "../assets/images/wallet.svg";
import calendar from "../assets/images/calendar.svg";
import cancel from "../assets/images/cancel.svg";
import copy from "../assets/images/copy.svg";

import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

import '../styles/main.scss';

const App = () => {
    const inputRangehandler = (event) => {
        const element  = event.target;
        const currentValue = element.value;
        const minValue = element.min;
        const maxValue = element.max;

        const value = (currentValue - minValue)/ (maxValue - minValue) * 100;

        element.style.background = 'linear-gradient(to right, #2EB670 0%, #2EB670 ' + value + '%, #DBDCDE ' + value + '%, #DBDCDE 100%)';
    }
    return (
        <div className="donation_container">
            <div className="search_bar__wrapper card">
                <h3>Donations</h3>
                <div className="search_bar">
                    <div className="search">
                        <img src={search} className="search_icon" />
                        <input type="serach" placeholder="Search" />
                    </div>
                    <div className="select_box">
                        <select>
                            <option>All statuses</option>
                        </select>
                    </div>
                </div>
            </div>
            <main>
                <div className="donation_wrapper">
                    <div className="donation_info_wrapper card">
                        <div className="currency_convertor">
                            <div>
                                <div>
                                    {/* <span className="dollar_icon"></span> */}
                                    <img src={dollarSign} className="dollar_icon" />
                                    <span>Donation</span>
                                </div>
                                <div className="convertor">
                                    <span>€20.60 EUR</span>
                                    <span>≈ $22.22 USD</span>
                                </div>
                            </div>
                            <div className="id_wrapper">
                                <span>ID</span>
                                <span className="copy_id">
                                    <span className="id">DYHY694Y</span>
                                    <img src={copy} alt="copy"/>
                                </span>
                                
                            </div>
                        </div>
                        <div className="benefactor_info">
                            <div>
                                <span>Status</span>
                                <span className="status success">
                                    <img src={success} />
                                    <span>Success</span>
                                </span>
                            </div>
                            <div>
                                <span>Supporter</span>
                                <span><a href="#">Charlotte Ann</a></span>
                            </div>
                            <div>
                                <span>Campaign</span>
                                <span><a href="Charlotte Ann">Workout for water</a></span>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <Tabs defaultActiveKey="behavior" id="uncontrolled-tab-example" className="tabs_wrapper">
                            <Tab eventKey="behavior" title="Behavior" className="tab_content">
                                <form>
                                    <div className="form_field_container">
                                    <div className="form_field">
                                        <label>Designation</label>
                                        <div>
                                            <div className="select_box">
                                                <select>
                                                    <option>Match Checkout Setting</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form_field">
                                        <label>Goal</label>
                                        <div className="goal_amount">
                                            <input defaultValue="$10.00" />
                                            <div className="select_box">
                                                <select>
                                                    <option>USD</option>
                                                    <option>Euro</option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form_field actions">
                                        <label>Default Amount</label>
                                        <div className="actions-wrapper">
                                            <span className="checkbox-label__wrapper">
                                                <label className="radio-container">
                                                    <input id="checkout" name="checkout" type="radio" />
                                                    <span className="checkmark"></span>
                                                </label>
                                                <span htmlFor="checkout">Match Checkout Setting</span>
                                            </span>
                                            <span className="checkbox-label__wrapper">
                                                <label className="radio-container">
                                                    <input id="customize" name="customize" type="radio" />
                                                    <span className="checkmark"></span>
                                                </label>
                                                <span htmlFor="customize">Customize</span>
                                            </span>
                                            <span className="checkbox-label__wrapper">
                                                <label className="checkbox-container">
                                                    <input id="default_currency" name="default_currency" type="checkbox" />
                                                    <span className="checkmark"></span>
                                                </label>
                                                <span htmlFor="default_currency">Allow donor to change default currency</span>
                                            </span>
                                        </div>
                                    </div>
                                    <div className="form_field">
                                        <label>Border size</label>
                                        <div className="range_wrapper">
                                            <input type="range" className="slider" 
                                                    min="0" max="100"
                                                    onInput={inputRangehandler}
                                            />
                                            <span>2px</span>
                                        </div>
                                    </div>
                                    <div className="form_field">
                                        <label>Border radius</label>
                                        <div className="range_wrapper">
                                            <input type="range" className="slider" 
                                                    min="0" max="100"
                                                    onInput={inputRangehandler}
                                            />
                                            <span>15px</span>
                                        </div>
                                    </div>
                                    </div>
                            
                                    <div className="btns_wrapper">
                                        <button type="button" className="save btn">Save Changes</button>
                                        <button type="button" className="cancel btn">Cancel</button>
                                    </div>
                                </form>
                            </Tab>
                            <Tab eventKey="appearance" title="Appearance">
                                <h2>Appearance</h2>
                            </Tab>
                            <Tab eventKey="custom_fields" title="Custom Fields">
                                <h2>Custom Fields</h2>
                            </Tab>
                            <Tab eventKey="questions" title="Questions">
                                <h2>Questions</h2>
                            </Tab>
                            <Tab eventKey="URL_control" title="URL Control">
                                <h2>URL Control</h2>
                            </Tab>
                        </Tabs>
                    </div>
                </div>
                <div className="sidebar card">
                    <div>
                        <span className="sidebar_icon exchange">
                            <img src={repeat} alt="repeat"/>
                            <span>Change Amount</span>
                        </span>
                    </div>
                    <div>
                        <span className="sidebar_icon wallet">
                            <img src={wallet} alt="wallet"/>
                            <span>Change Payment Method</span>
                        </span>
                    </div>
                    <div className="active">
                        <span className="sidebar_icon calendar">
                            <img src={calendar} alt="calendar"/>
                            <span>Change Date</span>
                        </span>
                    </div>
                    <div>
                        <span className="sidebar_icon cancel">
                            <img src={cancel} alt="cancel"/>
                            <span>Cancel Recurring</span>
                        </span>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default App;