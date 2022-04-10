import './Inventory.css';
import cardData from '../../sample/oracle-cards.json'
import { Container, Form, FormControl, NavDropdown } from 'react-bootstrap';
// Example of a data array that
// you might receive from an API

const data = [
  { name: "Sliver Queen", rarity: "Rare", set: "Sronghold" },
  { name: "Armored ascension", rarity: "Uncommon", set: "Magic 2011" },
  { name: "Grim Harvest", rarity: "Common", set: "Coldsnap" },
]

function Inventory() {
  return (
    <Container>
    <div className="Inventory">
      <table>
        <tr>
          <th>Card Name</th>
          <th>Rarity</th>
          <th>Set</th>
        </tr>
        {cardData.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.name}</td>
              <td>{val.rarity}</td>
              <td>{val.set_name}</td>
            </tr>
          )
        })}
      </table>
    </div>
    </Container>
  );
}

export default Inventory;