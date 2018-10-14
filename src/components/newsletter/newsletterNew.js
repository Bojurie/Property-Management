import React, { Component } from 'react';

import NewnewsletterForm from './newsletterNewForm';

class NewNewsletter extends Component {

    onSubmit = (fields) => {
       console.log('trying to handle submit')
    }


    render(){
        return (
            <div className='new-newsletter'>
                <NewnewsletterForm onSubmit={(event) => this.onSubmit(event)}/>

            </div>
        )
    }
}

export default NewNewsletter;