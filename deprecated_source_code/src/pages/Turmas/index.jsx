import Menu from '../../components/Menu/index'
import './index.css'

import React from 'react';
import json from '../../pages.json';

import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

import Typography from '@material-ui/core/Typography';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


const GroupPanel = ({ name, path, projects }) => (
  <ExpansionPanel className="GroupPanel">
    <ExpansionPanelSummary
      expandIcon={<ExpandMoreIcon />}
      aria-controls={"panel-" + name + "-content"}
      id={"panel-" + name + "-header"}>
      <Typography variant="h5" className="Title">
        {name}
      </Typography>
    </ExpansionPanelSummary>
    <ExpansionPanelDetails className="GroupPanelDetails">
      {projects.map((project, index) => (
        <ProjectCard key={index} currentPath={path} {...project} />
      ))}
    </ExpansionPanelDetails>
  </ExpansionPanel>
)

const ProjectCard = ({ name, currentPath, path, description, picture, pages, site }) => (
  <Card className="ProjectCard">
    <CardMedia image={picture} title={name} component="img" />
    <CardContent className="CardContent">
      <Typography variant="h5" className="Title" gutterBottom>
        {name}
      </Typography>
      <Typography className="CardDescription" color="textSecondary" gutterBottom>
        {description}
      </Typography>
      <List dense={true}>
        {pages.map((page, index) => (
          <ProjectLink key={index} currentPath={currentPath + '/' + path} {...page} />
        ))}
        {site && site.map((site, index) => (
          <SiteLink key={index} {...site} />
        ))}
      </List>

    </CardContent>
  </Card>
)

const ListItemLink = (props) => {
  return <ListItem button component="a" {...props} />;
};

const ProjectLink = ({ name, currentPath, path }) => (
  <ListItemLink href={'pages/' + currentPath + '/' + path + '/index.html'}>
    <ListItemText className="Title" primary={name} />
  </ListItemLink>
)

const SiteLink = ({ name, link }) => (
  <ListItemLink href={link}>
    <ListItemText className="Title" primary={name} />
  </ListItemLink>
)


const Main = () => {
  return (
    <main className="Main">
      {json.filter(group => !group.hidden).map((group, index) => (
        <GroupPanel key={index} {...group} />
      ))}
    </main>
  );
}

class Turmas extends React.Component {
  render() {
    return (
      <div className="App">
        <Menu />
        <Main id="header-turmas" />
      </div>
    );
  }
}

export default Turmas;