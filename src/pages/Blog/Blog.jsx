/* eslint-disable no-unused-vars */

import React, { useState } from 'react';
import { PDFDownloadLink, Document, Page, Text, View, StyleSheet } from '@react-pdf/renderer';

const Blog = () => {
    const [showPdf, setShowPdf] = useState(false);

    const handlePdfClick = () => {
        setShowPdf(true);
    };

    const styles = StyleSheet.create({
        page: {
            padding: 40,
        },
        heading: {
            fontSize: 24,
            fontWeight: 'bold',
            marginBottom: 20,
            textAlign: 'center',
        },
        section: {
            fontSize: 16,
            marginBottom: 10,
            textAlign: 'justify',
        },
    });

    const pdfContent = (
        <Document>
            <Page size="A4" style={styles.page}>
                <View>
                    <Text style={styles.heading}>This is blog page</Text>
                    <View style={styles.section}>
                        <Text style={styles.section}>
                            1. Tell us the differences between uncontrolled and controlled components.
                        </Text>
                        <Text style={styles.section}>
                            The primary distinction between uncontrolled and controlled components is that uncontrolled components are external to the system and are subject to external variables, whereas controlled components are internal to the system and may be adjusted or modified to match the needs of the system.
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.section}>2. How to validate React props using PropTypes</Text>
                        <Text style={styles.section}>
                            PropTypes are a technique in React to validate the props supplied to a component. It is a great tool for identifying problems and ensuring that the expected data type and structure are sent in as props. We can check that the component works as intended by passing props with the correct data type and structure. If we pass in props with the incorrect data type or structure, we will receive warnings in the console. This makes it easy to detect faults and debug difficulties.
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.section}>3. Tell us the difference between nodejs and express js.</Text>
                        <Text style={styles.section}>
                            Node.js is a runtime environment for executing JavaScript code, whereas Express.js is a web framework built on top of Node.js that provides a collection of functionality for developing server-side applications.
                        </Text>
                    </View>
                    <View style={styles.section}>
                        <Text style={styles.section}>
                            4. What is a custom hook, and why will you create a custom hook?
                        </Text>
                        <Text style={styles.section}>
                            In React, custom hooks are a powerful tool for creating reusable and composable logic, making it easier to write maintainable and scalable code. Write a custom hook that handles an API call and provides the data to a component, abstracting the network request and response handling details.
                        </Text>
                    </View>
                </View>
            </Page>
        </Document>
    );

    return (
        <div className='mt-10 mb-20'>
            <div className='text-end mx-20'>
                {showPdf ? (
                    <PDFDownloadLink document={pdfContent} fileName="blog.pdf">
                        {({ blob, url, loading, error }) =>
                            loading ? 'Generating PDF...' : 'Download PDF'
                        }
                    </PDFDownloadLink>
                ) : (
                    <button className='btn btn-accent' onClick={handlePdfClick}>Create PDF</button>
                )}
            </div>
            <p className='text-center text-5xl font-bold'>This is blog page</p>
            <div className='grid grid-cols-2 mx-20 text-justify mt-10 gap-5'>
                <div>
                    <p className='font-bold text-lg mb-2'>1. Tell us the differences between uncontrolled and controlled components.</p>
                    <p className=''>The primary distinction between uncontrolled and controlled components is that uncontrolled components are external to the system and are subject to external variables, whereas controlled components are internal to the system and may be adjusted or modified to match the needs of the system.</p>
                </div>
                <div>
                    <p className='font-bold text-lg mb-2'>2. How to validate React props using PropTypes</p>
                    <p>PropTypes are a technique in React to validate the props supplied to a component. It is a great tool for identifying problems and ensuring that the expected data type and structure are sent in as props.We can check that the component works as intended by passing props with the correct data type and structure. If we pass in props with the incorrect data type or structure, we will receive warnings in the console. This makes it easy to detect faults and debug difficulties. </p>
                </div>
                <div>
                    <p className='font-bold text-lg mb-2'>3. Tell us the difference between nodejs and express js.</p>
                    <p>Node.js is a runtime environment for executing JavaScript code, whereas Express.js is a web framework built on top of Node.js that provides a collection of functionality for developing server-side applications. </p>
                </div>
                <div>
                    <p className='font-bold text-lg mb-2'>4. What is a custom hook, and why will you create a custom hook?</p>
                    <p>In React, custom hooks are a powerful tool for creating reusable and composable logic, making it easier to write maintainable and scalable code. Write a custom hook that handles an API call and provides the data to a component, abstracting the network request and response handling details.</p>
                </div>
            </div>
        </div>
    )
}



export default Blog;