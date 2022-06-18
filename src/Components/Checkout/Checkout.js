import { Container } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import './Checkout.css';
import * as FaIcons from 'react-icons/fa'

const Checkout = () => {

    const testFunction = () => {
        console.log('testFunction calling');
    }
    

    return (
        <div>
            <Header />
            <div className="checkout">
                <Container>
                    <div className="shopping_cart my-5">
                        <div className="table-responsive ">
                            <table className="table mb-0">
                                <thead>
                                    <tr>
                                        <th scope="col">Product</th>
                                        <th scope="col"></th>
                                        <th scope="col">Quantity</th>
                                        <th scope="col">At Price</th>
                                        <th scope="col" className="m_force_end">In total</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {/* table data */}
                                    <tr >
                                        <td style={{ height: '80px', width: '80px' }}>
                                            <img className='h-100 w-100' src={require('../../Assets/Products/volt-blue.png')} alt="" />
                                        </td>
                                        <td>

                                            <p className='m-0 fw-bold'>ONE Blue White Portion 11-pack</p>
                                            <p className='m-0'>11-pack (SEK 26.40 / pc)</p>
                                        </td>

                                        <td>
                                            <div className="d-flex align-items-center">

                                                <FaIcons.FaMinusCircle className='cursor_pointer' />
                                                <span className="mx-3"> 2</span>
                                                <FaIcons.FaPlusCircle className='cursor_pointer' />
                                            </div>
                                        </td>
                                        <td>
                                            (SEK 26.40 / pc)
                                        </td>
                                        <td>
                                            <span className='fw-bold m_force_end'> 869.70 kr</span>
                                        </td>
                                    </tr>
                                    <tr >
                                        <td style={{ height: '80px', width: '80px' }}>
                                            <img className='h-100 w-100' src={require('../../Assets/Products/volt-blue.png')} alt="" />
                                        </td>
                                        <td>

                                            <p className='m-0 fw-bold'>ONE Blue White Portion 11-pack</p>
                                            <p className='m-0'>11-pack (SEK 26.40 / pc)</p>
                                        </td>

                                        <td>
                                            <div className="d-flex align-items-center">

                                                <FaIcons.FaMinusCircle className='cursor_pointer' />
                                                <span className="mx-3"> 2</span>
                                                <FaIcons.FaPlusCircle className='cursor_pointer' />
                                            </div>
                                        </td>
                                        <td>
                                            (SEK 26.40 / pc)
                                        </td>
                                        <td>
                                            <span className='fw-bold m_force_end'> 869.70 kr</span>
                                        </td>
                                    </tr>
                                    <tr >
                                        <td style={{ height: '80px', width: '80px' }}>
                                            <img className='h-100 w-100' src={require('../../Assets/Products/volt-blue.png')} alt="" />
                                        </td>
                                        <td>

                                            <p className='m-0 fw-bold'>ONE Blue White Portion 11-pack</p>
                                            <p className='m-0'>11-pack (SEK 26.40 / pc)</p>
                                        </td>

                                        <td>
                                            <div className="d-flex align-items-center">

                                                <FaIcons.FaMinusCircle className='cursor_pointer' />
                                                <span className="mx-3"> 2</span>
                                                <FaIcons.FaPlusCircle className='cursor_pointer' />
                                            </div>
                                        </td>
                                        <td>
                                            (SEK 26.40 / pc)
                                        </td>
                                        <td>
                                            <span className='fw-bold m_force_end'> 869.70 kr</span>
                                        </td>
                                    </tr>
                                    <tr >
                                        <td style={{ height: '80px', width: '80px' }}>
                                            <img className='h-100 w-100' src={require('../../Assets/Products/volt-blue.png')} alt="" />
                                        </td>
                                        <td>

                                            <p className='m-0 fw-bold'>ONE Blue White Portion 11-pack</p>
                                            <p className='m-0'>11-pack (SEK 26.40 / pc)</p>
                                        </td>

                                        <td>
                                            <div className="d-flex align-items-center">

                                                <FaIcons.FaMinusCircle className='cursor_pointer' />
                                                <span className="mx-3"> 2</span>
                                                <FaIcons.FaPlusCircle className='cursor_pointer' />
                                            </div>
                                        </td>
                                        <td>
                                            (SEK 26.40 / pc)
                                        </td>
                                        <td>
                                            <span className='fw-bold m_force_end'> 869.70 kr</span>
                                        </td>
                                    </tr>
                                    <tr >
                                        <td style={{ height: '80px', width: '80px' }}>
                                            <img className='h-100 w-100' src={require('../../Assets/Products/volt-blue.png')} alt="" />
                                        </td>
                                        <td>

                                            <p className='m-0 fw-bold'>ONE Blue White Portion 11-pack</p>
                                            <p className='m-0'>11-pack (SEK 26.40 / pc)</p>
                                        </td>

                                        <td>
                                            <div className="d-flex align-items-center">

                                                <FaIcons.FaMinusCircle className='cursor_pointer' />
                                                <span className="mx-3"> 2</span>
                                                <FaIcons.FaPlusCircle className='cursor_pointer' />
                                            </div>
                                        </td>
                                        <td>
                                            (SEK 26.40 / pc)
                                        </td>
                                        <td>
                                            <span className='fw-bold m_force_end'> 869.70 kr</span>
                                        </td>
                                    </tr>
                                    <tr >
                                        <td style={{ height: '80px', width: '80px' }}>
                                            <img className='h-100 w-100' src={require('../../Assets/Products/volt-blue.png')} alt="" />
                                        </td>
                                        <td>

                                            <p className='m-0 fw-bold'>ONE Blue White Portion 11-pack</p>
                                            <p className='m-0'>11-pack (SEK 26.40 / pc)</p>
                                        </td>

                                        <td>
                                            <div className="d-flex align-items-center">

                                                <FaIcons.FaMinusCircle className='cursor_pointer' />
                                                <span className="mx-3"> 2</span>
                                                <FaIcons.FaPlusCircle className='cursor_pointer' />
                                            </div>
                                        </td>
                                        <td>
                                            (SEK 26.40 / pc)
                                        </td>
                                        <td>
                                            <span className='fw-bold m_force_end'> 869.70 kr</span>
                                        </td>
                                    </tr>

                                </tbody>
                            </table>
                        </div>
                        <div className="in_total">
                            <div className="calculation btm_border_dash">
                                <div className="d-flex justify-content-between align-items-center">
                                    <p className='mb-1 fw-bold fs20'>Order Total</p>
                                    <p className='mb-1 fw-bold fs20'>2869.70 kr</p>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <p className='mb-1'>Vat</p>
                                    <p className='mb-1'>9.70 kr</p>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <p className='mb-1'>Shipping</p>
                                    <p className='mb-1'>0.70 kr</p>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center">
                                <p className='mb-1 fw-bold fs20'>Subtotal</p>
                                <p className='mb-1 fw-bold fs20'>0.70 kr</p>
                            </div>
                        </div>
                    </div>
                    
                </Container>
            </div>
            <Footer displayNone="d-none" />
        </div>
    );


};
export default Checkout;