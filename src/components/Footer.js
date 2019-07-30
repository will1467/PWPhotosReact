import React, { Fragment} from 'react';
function Footer() {
  return (
    <Fragment>
       <div className="row  bg-primary">
        <div className="col-xs-12 col-sm-12 col-md-12 mt-2 mt-sm-2 text-center text-white">
            <p><u><a href="https://www.nationaltransaction.com/">National Transaction Corporation</a></u> is a
                Registered MSP/ISO of Elavon, Inc. Georgia [a wholly owned subsidiary of U.S. Bancorp, Minneapolis, MN]
            </p>
            <p className="h6">&copy All right Reversed.<a className="text-green ml-2" href="https://www.sunlimetech.com">Sunlimetech</a></p>
        </div>
        <hr/>
    </div>
    </Fragment>
  );
}

export default Footer;
