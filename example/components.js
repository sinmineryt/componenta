class Navbar extends Component {
  constructor() {
    super("navbar");
  }
  html() {
    return "<div style='display: flex;'> \
        <h3>Hello</h3> \
        <a href='index.html'>Home</a> \
        <a href='two.html'>Two</a> \
      </div>";
  }
}

class InnerHtml extends Component {
  constructor() {
    super("innerhtml-test");
  }
  html() {
    return "<inner-html />";
  }
}
