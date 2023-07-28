import { connect } from "react-redux";
import { addToCart } from "../Services/Action/action";
import Home from "../Component/Home";

const mapDispatchToProps=dispatch=>({
addToCartHandler:data=> dispatch(addToCart(data))
})
const mapStateToProps=state=>({

})


export default connect(mapStateToProps,mapDispatchToProps)(Home)
//export default Home;
