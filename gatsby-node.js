const Promise = require('bluebird')
const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const EventDeatils = path.resolve('./src/templates/event-details.js')
    const MembershipDeatils = path.resolve('./src/templates/membership-details.js')
    const RoomDeatils = path.resolve('./src/templates/room-details.js')
    const FoodDeatils = path.resolve('./src/templates/food-and-drink-details.js')

    resolve(
      graphql(
        `
          {
                allContentfulEvents {
    edges {
      node {
        eventName
        title
        slug
      }
    }
  }

 allContentfulMembership {
    edges {
      node {
        name
        slug
      }
    }
  }

  
  allContentfulRooms {
    edges {
      node {
        roomName
        slug
      }
    }
  }


  allContentfulFoodDrink {
    edges {
      node {
        slug
        name
      }
    }
  }


          }
          `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const posts = result.data.allContentfulEvents.edges
        const membership = result.data.allContentfulMembership.edges
        const rooms = result.data.allContentfulRooms.edges
        const food = result.data.allContentfulFoodDrink.edges

        posts.forEach((post, index) => {
          createPage({
            path: `/events/upcoming-events/${post.node.slug}/`,
            component: EventDeatils,
            context: {
              slug: post.node.slug
            },
          })
        })


        membership.forEach((post, index) => {
          createPage({
            path: `/membership/${post.node.slug}/`,
            component: MembershipDeatils,
            context: {
              slug: post.node.slug
            },
          })
        })

        rooms.forEach((post, index) => {
          createPage({
            path: `/rooms/${post.node.slug}/`,
            component: RoomDeatils,
            context: {
              slug: post.node.slug
            },
          })
        })


        food.forEach((post, index) => {
          createPage({
            path: `/food-and-drink/${post.node.slug}/`,
            component: FoodDeatils,
            context: {
              slug: post.node.slug
            },
          })
        })


      })
    )
  })
}



