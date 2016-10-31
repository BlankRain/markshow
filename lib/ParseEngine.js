



//var splitReg = /\[slide\s*(.*)\]/ig;
var splitReg=/\[slide\s*(.*)\]|\[幻片\s*(.*)\]/ig; // [slide xxx] or [幻片 xxx]
var oneSlideReg=/\[slide\s+(.+)\s?\]|\[幻片\s+(.+)\s?\]/;
//var noteReg = /\[note\]([\s\S]+)\[\/note\]/im;
var noteReg=/\[note\]([\s\S]+)\[\/note\]|\[笔记\]([\s\S]+)\[\/笔记\]/im;
var subReg = /\[subslide\]([\s\S]+)\[\/subslide\]|\[子片\]([\s\S]+)\[\/子片\]/im;
var magicReg = /\[magic\b(.*)\]([\s\S]+)\[\/magic\]|\[魔片\b(.*)\]([\s\S]+)\[\/魔片\]/im;
var coverReg = /(\w+)\s?:\s?(.+)/;
var idSelectReg= function(v){return new RegExp('\\#' + v);};
var classSelectReg=function(v){return new RegExp('\\.' + v);};
var titleSpiltReg=/\[slide\s*(.*)\]|\[幻片\s*(.*)\]/ig;
var ParseEngine=module.exports={
  slideToken:splitReg,
  oneSlideToken:oneSlideReg,
  noteToken:noteReg,
  subslideToken:subReg,
  magicToken:magicReg,
  idToken:idSelectReg,
  classToken:classSelectReg,
  coverToken:coverReg,
  titleSpiltToken:titleSpiltReg
}
// all regexp together..
