import React, { Component } from 'react'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Button, Addition, SearchWrapper } from './style'

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocus: false
    }
  }

  handleFocus = () => {
    this.setState({
      isFocus: true
    })
  }

  handleBlur = () => {
    this.setState({
      isFocus: false
    })
  }

  render() {
    return (
      <HeaderWrapper>
        <Logo />
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          <NavItem className='right'>登陆</NavItem>
          <NavItem className='right'>
            <i className="iconfont">&#xe636;</i>
          </NavItem>
          <SearchWrapper>
            <NavSearch 
              className={ this.state.isFocus ? 'focused' : '' }
              onFocus={ this.handleFocus }
              onBlur={ this.handleBlur }
            ></NavSearch>
            <i className={this.state.isFocus ? 'focused iconfont' : 'iconfont'}>&#xe617;</i>
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className="writting">
            <i className="iconfont">&#xe615;</i>
            写文章
          </Button>
          <Button className="reg">注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
}

export default Header