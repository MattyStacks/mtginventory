import './Inventory.css';

// Example of a data array that
// you might receive from an API
const data = [
  { name: "Sliver Queen", rarity: "Rare", set: "Sronghold" },
  { name: "Armored ascension", rarity: "Uncommon", set: "Magic 2011" },
  { name: "Grim Harvest", rarity: "Common", set: "Coldsnap" },
]

function Inventory() {
  return (
    <div className="Inventory">
      <table>
        <tr>
          <th>Card Name</th>
          <th>Set</th>
          <th>Rarity</th>
        </tr>
        {data.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.name}</td>
              <td>{val.rarity}</td>
              <td>{val.set}</td>
            </tr>
          )
        })}
      </table>
    </div>
  );
}

export default Inventory;