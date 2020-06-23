import React from 'react'
import { HeaderWrapper, Logo, Nav, NavItem, NavSearch, Button, Addition, SearchWrapper } from './style'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'

const Header = (props) => {
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
          <CSSTransition
            in={ props.isFocus }
            timeout={ 200 }
            classNames='slide'
          >
            <NavSearch 
              className={ props.isFocus ? 'focused' : '' }
              onFocus={ props.handleFocus }
              onBlur={ props.handleBlur }
            ></NavSearch>
          </CSSTransition>
          <i className={ props.isFocus ? 'focused iconfont' : 'iconfont' }>&#xe617;</i>
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

const mapStateToProps = (state) => {
  return {
    isFocus: state.header.isFocus
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleFocus() {
      const action = {
        type: 'focus_search',
      };
      dispatch(action);
    },
    handleBlur() {
      const action = {
        type: 'blur_search'
      }
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);