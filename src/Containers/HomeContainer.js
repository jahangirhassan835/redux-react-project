import { connect } from "react-redux";
import { addToCart } from "../Services/Action/action";
import Home from "../Component/Home";
const MapStateToProps=state=>({

})
const MapDispatchToProps=dispatch=>({
addToCartHandler:data=> dispatch(addToCart(data))
})


export default connect(MapDispatchToProps,MapStateToProps)(Home)
//export default Home;