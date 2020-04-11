import React, { Component } from 'react';


class Directory extends Component {
      constructor(props) {
            super(props);
            this.state = {
                  campsites: [
                        {
                              id: 0,
                              name: 'Graphic Design',
                              image: 'assets/images/mlksm.jpg',
                              elevation: 1233,
                              //description: "2nd Street Bistro Restaunt in Williamsburg, Virginia. "
                        },
                        {
                              id: 1,
                              name: 'Web Design ',
                              image: 'assets/images/nucampweb.jpg',
                              elevation: 877,
                              //description: "Shop for your 2019 prom dress in our Virginia Beach store or online!"
                        },
                        {
                              id: 2,
                              name: 'Video Production',
                              image: 'assets/images/allrage1sm.jpg',
                              elevation: 2901,
                              //description: "A Passion for shaping the city to preserve the past, enhance the present, and focus on the future."
                        },
                        {
                              id: 3,
                              name: 'MediaMarketing ',
                              image: 'assets/images/ymcasm.jpg',
                              elevation: 42,
                              //description: " Living healthy is about spirit, mind and body at every age and stage at the YMCA ."
                        }
                  ],
            };
      }

      render() {
            const directory = this.state.campsites.map(campsite => {
                  return (
                        <div key={campsite.id} className="col">
                              <img src={campsite.image} alt={campsite.name} />
                              <h2>{campsite.name}</h2>
                              <p>{campsite.description}</p>
                        </div>
                  );
            });

            return (
                  <div className="container">
                        <div className="row">
                              {directory}
                        </div>
                  </div>
            );
      }
}

export default Directory;