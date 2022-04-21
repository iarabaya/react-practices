import ReactDOM from 'react-dom/client';
const portalRoot = document.getElementById("portal");

class Modal extends Component {
  constructor(props) {
    super(props);

    this.el = document.createElement("div");
  }

  componentDidMount = () => {
    portalRoot.appendChild(this.el)
  }
 
  componenWillUnmount = () => {
    portalRoot.removeChild(this.el)
  }

  render() { 
    const { children } = this.props;
    return ReactDOM.createPortal(children , this.el);
  }
}
 
export default Modal;