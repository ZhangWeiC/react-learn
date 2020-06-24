import React, { Component } from 'react'
import { 
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  Button,
  Addition,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
} from './style'
import { CSSTransition } from 'react-transition-group'
import { connect } from 'react-redux'
import { actionCreator } from './store'

class Header extends Component {
  showSearchInfo = (show) => {
    if(show) {
      return (
        <SearchInfo>
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch>换一批</SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {this.props.searchList.map(item => {
              return (
                <SearchInfoItem key={item}>{item}</SearchInfoItem>
              )
            })}
          </SearchInfoList>
        </SearchInfo>
      )
    }else {
      return null
    }
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
            <CSSTransition
              in={ this.props.isFocus }
              timeout={ 200 }
              classNames='slide'
            >
              <NavSearch 
                className={ this.props.isFocus ? 'focused' : '' }
                onFocus={ this.props.handleFocus }
                onBlur={ this.props.handleBlur }
              ></NavSearch>
            </CSSTransition>
            <i className={ this.props.isFocus ? 'focused iconfont' : 'iconfont' }>&#xe617;</i>
            { this.showSearchInfo(this.props.isFocus) }
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

const mapStateToProps = (state) => {
  return {
    isFocus: state.getIn(['header', 'isFocus']),
    searchList: state.getIn(['header', 'list'])
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleFocus() {
      dispatch(actionCreator.getList())
      dispatch(actionCreator.searchFocus())
    },
    handleBlur() {
      dispatch(actionCreator.searchBlur())
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);