import React from 'react'

import Card from '@material-ui/core/Card';

import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import _ from 'lodash';
import CircularProgress from '@material-ui/core/CircularProgress';


const Body = (props) => {
    if(props.data.length > 0){
        const arrayOfCards = _.map(props.data, (d) => <CardCard id={d.id} title={d.title} description={d.description}/>
        )
        console.log(arrayOfCards)
        return (
            arrayOfCards
        )
    }
    else{
        return(
            <CircularProgress />
        )
    }

}


const CardCard = (props) => {
    return(
        <Card raised={true} style={{width: '250px', marginTop: '20px'}} id={props.id}>
            <CardHeader title={props.title}/>
            <CardContent>
                {props.description}
            </CardContent>
        </Card>
    )

}

export default Body;