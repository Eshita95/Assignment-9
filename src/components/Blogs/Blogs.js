
import React from 'react';

const Blogs = () => {
    return (
        <div className='mx-16 my-10'>
            <h3 className='text-2xl font-bold'>Question: What is Semantic Tag? </h3>
            <p className='mt-4'> Semantic HTML or semantic markup is HTML that introduces meaning to the web page rather than just presentation. For example, a 'p' tag indicates that the enclosed text is a paragraph. This is both semantic and presentational because people know what paragraphs are, and browsers know how to display them.On the flip side of this equation, tags such as 'b' and 'i' are not semantic. They define only how the text should look (bold or italic), and don't provide any additional meaning to the.</p>

            <h3 className='text-2xl font-bold mt-10'>Question: Difference between inline block and block elements. </h3>
            <div className='grid grid-cols-2 gap-6 mx-10 my-8'>
                <div>
                    <h3 className='text-xl font-bold mt-4'>Inline block</h3>
                    <p>Inline elements can begin within a line of the HTML element and it never starts a new line for the HTML. The withd is defined only till the tags of inline extends. Inline elements can break among the lines.</p>
                </div>
                <div>
                    <h3 className='text-xl font-bold mt-4'>Block Element</h3>
                    <p>Blocks cannot begin within a line of the HTML element abd it always starts the new line of the HTML. The width is more than inline and is extended till the parent element extends. Block elements cannot break among the lines.</p>
                </div>
            </div>

        </div>
    );
};

export default Blogs;