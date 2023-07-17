import React from "react";
import '../components/signup.css';
function Signup(){
    return(
	<div class="section">
	<div class="container">
		<div class="row full-height justify-content-center">
			<div class="col-12 text-center align-self-center py-5">
				<div class="section pb-5 pt-5 pt-sm-2 text-center">
					<div className="nope">
					</div>
					<div class="card-3d-wrap mx-auto">
						<div class="card-3d-wrapper">
							<div class="card-front">
								<div class="center-wrap">
									<div class="section text-center">
										<h4 class="mb-4 pb-3">SIGN UP</h4>
										<div class="form-group mt-2">
											<input type="text" name="logname" class="form-style" placeholder="Your Full Name" id="logname" autocomplete="off"/>
											<i class="input-icon uil uil-user"></i>
										</div>	
                                        <div class="form-group mt-2">
											<input type="email" name="logemail" class="form-style" placeholder="Your Email" id="logemail" autocomplete="off"/>
											<i class="input-icon uil uil-at"></i>
										</div>	
										<div class="form-group mt-2">
											<input type="password" name="logpass" class="form-style" placeholder="Your Password" id="logpass" autocomplete="off"/>
											<i class="input-icon uil uil-lock-alt"></i>
										</div>
                                        <div class="form-group mt-2">
											<input type="password" name="logpass" class="form-style" placeholder="Confirm Your Password" id="logpass" autocomplete="off"/>
											<i class="input-icon uil uil-lock-alt"></i>
										</div>
                                        <div class="form-group mt-2">
											<input type="Phone number" name="Phone number" class="form-style" placeholder="Phone number" id="logemail" autocomplete="off"/>
											<i class="input-icon uil uil-at"></i>
										</div>	
										<br>
										</br>
										<a href="#" class="btn mt-4">submit</a>
									  </div>
								  </div>
							  </div>
						  </div>
					  </div>
				  </div>
			  </div>
		  </div>
	</div>
</div>
    );
}
export default Signup;