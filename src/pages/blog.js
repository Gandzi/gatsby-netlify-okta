import React from 'react'

import BlogRoll from "../components/BlogRoll"

class BlogIndexPage extends React.Component {
    state = {  }
    render() { 
        return (
            <React.Fragment>
                <h1>Latest Post</h1>
                <section>
                    <div className="content">
                        <BlogRoll/>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
 
export default BlogIndexPage;