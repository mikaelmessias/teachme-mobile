import {Fragment} from 'react';
import CIcon from '../../assets/svg/techs/c.svg';
import CommonLispIcon from '../../assets/svg/techs/common-lisp.svg';
import ComposerIcon from '../../assets/svg/techs/composer.svg';
import CppIcon from '../../assets/svg/techs/cpp.svg';
import CssIcon from '../../assets/svg/techs/css.svg';
import DelphiIcon from '../../assets/svg/techs/delphi.svg';
import DockerIcon from '../../assets/svg/techs/docker.svg';
import GithubIcon from '../../assets/svg/techs/github.svg';
import GnuBashIcon from '../../assets/svg/techs/gnu-bash.svg';
import GoLangIcon from '../../assets/svg/techs/go-lang.svg';
import HaskellIcon from '../../assets/svg/techs/haskell.svg';
import Html5Icon from '../../assets/svg/techs/html-5.svg';
import JavaIcon from '../../assets/svg/techs/java.svg';
import JavascriptIcon from '../../assets/svg/techs/javascript.svg';
import LispIcon from '../../assets/svg/techs/lisp.svg';
import MysqlIcon from '../../assets/svg/techs/mysql.svg';
import NginxIcon from '../../assets/svg/techs/nginx.svg';
import NodejsIcon from '../../assets/svg/techs/nodejs.svg';
import PhpIcon from '../../assets/svg/techs/php.svg';
import PostscriptIcon from '../../assets/svg/techs/postscript.svg';
import PythonIcon from '../../assets/svg/techs/python.svg';
import RaspberryPiIcon from '../../assets/svg/techs/raspberry-pi.svg';
import ReactIcon from '../../assets/svg/techs/react.svg';
import RubyIcon from '../../assets/svg/techs/ruby.svg';
import SassIcon from '../../assets/svg/techs/sass.svg';
import ScalaIcon from '../../assets/svg/techs/scala.svg';
import ScratchIcon from '../../assets/svg/techs/scratch.svg';
import SwiftIcon from '../../assets/svg/techs/swift.svg';
import SwiftifyIcon from '../../assets/svg/techs/swiftify.svg';
import TypescriptIcon from '../../assets/svg/techs/typescript.svg';
import VisualBasicIcon from '../../assets/svg/techs/visual-basic.svg';
import WebhookIcon from '../../assets/svg/techs/webhook.svg';

const getIcon = (icon: string) => {
  switch (icon) {
    case 'c':
      return CIcon;
    case 'common-lisp':
      return CommonLispIcon;
    case 'composer':
      return ComposerIcon;
    case 'cpp':
      return CppIcon;
    case 'css':
      return CssIcon;
    case 'delphi':
      return DelphiIcon;
    case 'docker':
      return DockerIcon;
    case 'github':
      return GithubIcon;
    case 'gnu-bash':
      return GnuBashIcon;
    case 'go-lang':
      return GoLangIcon;
    case 'haskell':
      return HaskellIcon;
    case 'html-5':
      return Html5Icon;
    case 'java':
      return JavaIcon;
    case 'javascript':
      return JavascriptIcon;
    case 'lisp':
      return LispIcon;
    case 'mysql':
      return MysqlIcon;
    case 'nginx':
      return NginxIcon;
    case 'nodejs':
      return NodejsIcon;
    case 'php':
      return PhpIcon;
    case 'postscript':
      return PostscriptIcon;
    case 'python':
      return PythonIcon;
    case 'raspberry-pi':
      return RaspberryPiIcon;
    case 'react':
      return ReactIcon;
    case 'ruby':
      return RubyIcon;
    case 'sass':
      return SassIcon;
    case 'scala':
      return ScalaIcon;
    case 'scratch':
      return ScratchIcon;
    case 'swift':
      return SwiftIcon;
    case 'swiftify':
      return SwiftifyIcon;
    case 'typescript':
      return TypescriptIcon;
    case 'visual-basic':
      return VisualBasicIcon;
    case 'webhook':
      return WebhookIcon;
    default:
      return Fragment;
  }
};

export default {getIcon};
