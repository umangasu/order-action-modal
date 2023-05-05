import * as React from 'react';
import Divider from '@mui/material/Divider';
import '../orderAction.css';

const RightDiv = (props) => {
    const {ordersResponse} = props;

    return(
        <div className={"div2"}>
            <Divider style={{backgroundColor: '#ebe9e6'}} />
            <div className={"section1"}>
                <div className={"section1-left"}>
                    <p style={{color: '#3b574f'}}>
                        {ordersResponse ? ordersResponse.listing.model.brand.displayName : ''} &nbsp;
                        {ordersResponse ? ordersResponse.listing.model.displayName : ''}</p>
                    <br/>
                    <p style={{color: '#8c9b96'}}>
                        {ordersResponse ? ordersResponse.listing.condition : ''} /&nbsp;
                        {ordersResponse ? ordersResponse.listing.manufactureYear : ''}</p>
                </div>
                <div className={"section1-right"}>
                    <img
                        src={ordersResponse ? ordersResponse.listing.images[0].image.url : ''}
                        style={{width: 40, height: 40, borderRadius: 8}}
                        loading="lazy"
                    />
                </div>
            </div>
            <Divider style={{backgroundColor: '#ebe9e6'}}/>
            <div className={"section2"}>
                <div className={"section2-left"}>
                    <p style={{color: '#8c9b96'}}>Selling Price</p>
                    <p style={{color: '#8c9b96'}}>Level 1 Commission (6.5%)</p>
                    <p style={{color: '#8c9b96'}}>Seller fee</p>
                    <p style={{color: '#8c9b96'}}>Insured Shipping</p>
                    <p style={{color: '#2f8772'}}>Bezel authentication</p>
                </div>
                <div className={"section2-right"}>
                    <p>${ordersResponse ? ordersResponse.salePriceCents/100 : ''}</p>
                    <p style={{color: '#8c9b96'}}>${ordersResponse ? ordersResponse.commissionRateBips/100 : ''}</p>
                    <p style={{color: '#8c9b96'}}>${ordersResponse ? ordersResponse.sellerFeeCents/100 : ''}</p>
                    <p style={{color: '#8c9b96'}}>Free</p>
                    <p style={{color: '#2f8772'}}>Free</p>
                </div>
            </div>
            <Divider style={{backgroundColor: '#ebe9e6'}}/>
            <div className={"section2"}>
                <div className={"section2-left"}>
                    <p>
                        <b>Earnings</b>
                    </p>
                </div>
                <div className={"section2-right"}>
                    <p>
                        <b>${ordersResponse ? ordersResponse.payoutAmountCents/100 : ''}</b>
                    </p>
                </div>
            </div>
        </div>
    )
};

export default RightDiv;