import logo from './logo.svg';
import './App.css';
import { Card, Typography, Button } from '@mui/material';
import PrintIcon from '@mui/icons-material/Print';
import { useReactToPrint } from 'react-to-print';
import React, { useRef } from 'react';



function App() {

  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
    documentTitle:"My Document"
  });

  const containerStyle = {
    display:"flex",
    flexDirection:"column",
    height:"100vh",
    gap:"20px",
    alignItems:"center",
    justifyContent:"center"
  }
  return (
    <div className="container" style={containerStyle}>
      <Button onClick={handlePrint}><PrintIcon style={{fontSize:"50px", color:"black"}}/></Button>
      <Card ref={componentRef} style={{backgroundColor:"black", color:"white", width:"1000px", padding:"1%"}}>
        <Typography variant="p">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus augue felis, fermentum quis rhoncus eu, maximus id enim. Etiam ac tortor libero. Mauris urna nunc, faucibus eget semper vel, iaculis id ante. Nam ut nisl quis augue faucibus imperdiet. Duis volutpat odio nisi, et faucibus diam fringilla eget. Duis sit amet turpis a magna viverra auctor vel blandit augue. Phasellus ut eros dui. Aliquam blandit faucibus purus, ut fringilla lectus malesuada nec. Nunc blandit sed tortor eu placerat. Etiam tristique augue vel lobortis porta. Aliquam semper felis quis tortor congue placerat ut a odio. Vivamus odio justo, laoreet nec orci eu, euismod laoreet lacus. Integer vitae purus lacus. Integer vulputate lorem eget neque eleifend ultricies.

Aliquam ut augue nec lorem tincidunt molestie. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum volutpat convallis sodales. Nam ultricies odio tristique libero dignissim varius sed a nulla. Ut fringilla velit dapibus, semper lacus nec, egestas nulla. Nunc sagittis, turpis nec ornare porttitor, eros felis consectetur ex, quis commodo nulla leo ac enim. Quisque vel nulla et erat finibus efficitur. Donec leo augue, luctus eu placerat fringilla, rutrum nec lorem. Nullam sit amet pretium nisl. Quisque pretium blandit quam a sollicitudin. Ut vel nisi eget nisi tristique vestibulum vitae vel dui. Praesent tincidunt magna eget leo ultrices scelerisque.

Donec odio purus, eleifend ut vulputate at, pharetra sed nunc. Quisque in facilisis velit, vitae efficitur lacus. Ut vel leo purus. Sed viverra bibendum nisi, non scelerisque augue porttitor id. Aliquam ornare tristique sapien. Morbi ut tempor metus. Aliquam erat volutpat. Curabitur interdum placerat egestas. Duis nec fringilla libero, ac hendrerit eros. Ut mattis mauris et iaculis congue. Donec feugiat semper faucibus. Proin ullamcorper eget ligula sed ultrices. Vivamus sed dapibus augue, sit amet dapibus ex.

Morbi vitae finibus orci. Nulla congue elementum consectetur. Aliquam et odio dignissim, gravida arcu eu, dictum augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In hac habitasse platea dictumst. Pellentesque pharetra velit nec purus gravida, et pharetra ex varius. Phasellus ut euismod urna. Nullam semper felis eu nisl laoreet condimentum. Fusce fringilla volutpat mauris, id elementum purus iaculis id. Aenean euismod aliquet vehicula. Vestibulum ornare pellentesque libero a vehicula. Vestibulum varius eleifend erat, a molestie enim molestie at.

Fusce molestie fermentum libero et congue. Suspendisse eu ipsum ac erat condimentum euismod in et tortor. Proin congue congue ex, in ullamcorper libero sagittis at. Nullam dictum nulla quis erat lacinia tempus. Vestibulum bibendum sapien mauris, a iaculis orci ornare eget. Duis porttitor eros eget aliquet eleifend. Maecenas aliquam et felis ac euismod. Mauris erat felis, placerat eu libero et, dictum lobortis turpis. Nunc tincidunt convallis magna, eu cursus tellus mattis sed. Nullam venenatis ante quis posuere ornare. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nulla a feugiat sem. Quisque at accumsan metus. Maecenas pellentesque ante risus, in aliquam enim facilisis ut. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Typography>
      </Card>
    </div>
  );
}

export default App;
