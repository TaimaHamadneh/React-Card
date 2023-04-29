import React, {Component} from 'react'

class TeamMember extends Component{
    render(){
        return(
            <div className="col-md-4 col-sm-6">
                <div className="card" style={{borderColor:'black'}}>
                    <div className="card-header">
                        <img style={{maxWidth: '100%', maxHeight: '90%'}} src={this.props.img} alt={this.props.name} />
                    </div>
                    <div className="card-body">
                        <h2>{this.props.name}</h2>
                        <h5>{this.props.position}</h5>
                    </div>
                </div>
            </div>
           )
    }
}

export default TeamMember