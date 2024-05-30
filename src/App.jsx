import Card from './components/card'
import CardLayout from './components/card_layout'
import Display from './components/display'
import Editor from './components/editor'

export default function App() {
  return (
    <Display>
      <Editor />
    <CardLayout>
      <Card name="Luke Skywalker" role="Jedi" strength={9} health={100} img="https://via.placeholder.com/150" />
      <Card name="Darth Vader" role="Sith" strength={10} health={100} img="https://via.placeholder.com/150" />
      <Card name="Boba Fett" role="Bounty Hunter" strength={8} health={100} img="https://via.placeholder.com/150" />
      <Card name="Han Solo" role="Smuggler" strength={7} health={100} img="https://via.placeholder.com/150" />
    </CardLayout>
    </Display>
   )
}