import React, {Component} from 'react';
import { connect } from 'react-redux';
import { showModal, addTodo, toggleTodo } from './actions';
import Modal from './Global/Modal';

export default class TodoList extends Component {
	constructor(props) {
        super(props);
		console.log(this.props);
	}
	
	onSubmit(event) {
		const input = event.target;
		const text = input.value;
		const isEnterKey = (event.which == 13);
		const isLongEnough = text.length > 0;

		if (isEnterKey && isLongEnough) {
		  input.value = '';
		  this.props.dispatch(addTodo(text));
		}
	};
	
	toggleTodo(id, event) {
		this.props.dispatch(toggleTodo(id));
	}
	
	showModal(e) {
		this.props.dispatch(showModal(true));
	}
	
	closeModal(e) {
        e.preventDefault();
        this.props.dispatch(showModal(false));
    }
		
	getFooter() {
        return (
			<div>				
				<div className="col-lg-8 text-md-right">
					<a href="#" className="btn btn-secondary" onClick={this.closeModal.bind(this)}>Close</a>
				</div>
			</div>
		)
    }

    render() {
	console.log(this.props);
		if (this.props.modal.modalShown) {
            return (
                <Modal
                    isOpen={true}
                    onRequestClose={this.closeModal.bind(this)}
                    header="Publish"
                    footer={this.getFooter()}
                    size="large"
                >
                    Are you sure you would like to publish this work order? Marketplace providers will be sending
                    you requests for assignment. You will then review the requests to assign the provider of your choice

                </Modal>
            );
        }
	
		return (
			<div className='todo'>
				<div><input type="button" name="modal" value="Show Modal" onClick={this.showModal.bind(this)} /></div>
				<div>
				  <input type='text'
						 className='todo__entry'
						 placeholder='Add todo'
						 onKeyDown={this.onSubmit.bind(this)} />
				  <ul className='todo__list'>
					{this.props.todos.map(t => (
					  <li key={t.id}
						  className='todo__item'
						  onClick={this.toggleTodo.bind(this, t.id)}>
						<Todo todo={t}/>
					  </li>
					)) }
				  </ul>
				</div>  
			</div>
		);
	};	
};

export function Todo(props) {
  const { todo } = props;

  if(todo.completed) {
    return <strike>{todo.text}</strike>;
  } else {
    return <span>{todo.text}</span>;
  }
}

var mapStateToProps = function mapStateToProps(state) {
	return { todos: state.reducer, modal: state.modalReducer };
};
  
/*var mapDispatchToProps = function mapDispatchToProps(dispatch) {
	return {
	  addTodo: text => dispatch(addTodo(text)),
	  toggleTodo: id => dispatch(toggleTodo(id))
	};
};*/
  
export default connect(mapStateToProps)(TodoList);