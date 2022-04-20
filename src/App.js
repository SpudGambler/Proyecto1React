import "./App.scss";
import { Alert, Card, DatePicker } from "antd";
import "antd/dist/antd.css";

function App() {
  return (
    <div className='App'>
      <h1>Componentes Ant Desing</h1>
      <span>Programación III</span>
      <div>
        <Alert message='Success Text' type='success' />
        <Alert message='Info Text' type='info' />
        <Alert message='Warning Text' type='warning' />
        <Alert message='Error Text' type='error' />
      </div>
      <div>
        <label>Selecciona una fecha</label>
        <DatePicker onchange='{date_test}'></DatePicker>
      </div>
      <div>
        <Card
          size='small'
          title='Tarjeta de presentación'
          extra={<a href='/'>Ver más</a>}
          style={{ width: 300 }}>
          <p>Jaime Alonso Parra</p>
          <p>Mg. Gestión y dev de proyectos de Software </p>
          <p>
            <small>jaimea.parral@autonoma.edu.co</small>
          </p>
        </Card>
      </div>
    </div>
  );
}

export default App;
