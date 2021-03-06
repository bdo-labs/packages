var Slate = {
  "Block": function() {},
  "Character": function() {},
  "Data": {
    "create": function() {}
  },
  "Document": function() {},
  "Editor": function() {},
  "Html": function() {},
  "Inline": function() {},
  "Mark": function() {},
  "Placeholder": function() {},
  "Plain": {
    "deserialize": function() {},
    "serialize": function() {}
  },
  "Range": function() {},
  "Raw": {
    "deserialize": function() {},
    "deserializeBlock": function() {},
    "deserializeDocument": function() {},
    "deserializeInline": function() {},
    "deserializeMark": function() {},
    "deserializeNode": function() {},
    "deserializeRange": function() {},
    "deserializeSelection": function() {},
    "deserializeState": function() {},
    "deserializeText": function() {},
    "serialize": function() {},
    "serializeBlock": function() {},
    "serializeDocument": function() {},
    "serializeInline": function() {},
    "serializeMark": function() {},
    "serializeNode": function() {},
    "serializeRange": function() {},
    "serializeSelection": function() {},
    "serializeState": function() {},
    "serializeText": function() {},
    "tersifyBlock": function() {},
    "tersifyDocument": function() {},
    "tersifyInline": function() {},
    "tersifyMark": function() {},
    "tersifyRange": function() {},
    "tersifySelection": function() {},
    "tersifyState": function() {},
    "tersifyText": function() {},
    "untersifyBlock": function() {},
    "untersifyInline": function() {},
    "untersifyRange": function() {},
    "untersifySelection": function() {},
    "untersifyState": function() {},
    "untersifyText": function() {}
  },
  "Schema": function() {},
  "Selection": function() {},
  "Stack": function() {},
  "State": function() {},
  "Text": function() {},
  "Transform": function() {},
  "Transforms": {
      "addMark": function() {},
      "addMarkAtRange": function() {},
      "addMarkByKey": function() {},
      "addMarkOperation": function() {},
      "applyOperation": function() {},
      "blur": function() {},
      "call": function() {},
      "collapseTo": function() {},
      "collapseToAnchor": function() {},
      "collapseToEnd": function() {},
      "collapseToEndOf": function() {},
      "collapseToEndOfNextBlock": function() {},
      "collapseToEndOfNextInline": function() {},
      "collapseToEndOfNextText": function() {},
      "collapseToEndOfPreviousBlock": function() {},
      "collapseToEndOfPreviousInline": function() {},
      "collapseToEndOfPreviousText": function() {},
      "collapseToFocus": function() {},
      "collapseToStart": function() {},
      "collapseToStartOf": function() {},
      "collapseToStartOfNextBlock": function() {},
      "collapseToStartOfNextInline": function() {},
      "collapseToStartOfNextText": function() {},
      "collapseToStartOfPreviousBlock": function() {},
      "collapseToStartOfPreviousInline": function() {},
      "collapseToStartOfPreviousText": function() {},
      "delete": function() {},
      "deleteAtRange": function() {},
      "deleteBackward": function() {},
      "deleteBackwardAtRange": function() {},
      "deleteCharBackward": function() {},
      "deleteCharBackwardAtRange": function() {},
      "deleteCharForward": function() {},
      "deleteCharForwardAtRange": function() {},
      "deleteForward": function() {},
      "deleteForwardAtRange": function() {},
      "deleteLineBackward": function() {},
      "deleteLineBackwardAtRange": function() {},
      "deleteLineForward": function() {},
      "deleteLineForwardAtRange": function() {},
      "deleteWordBackward": function() {},
      "deleteWordBackwardAtRange": function() {},
      "deleteWordForward": function() {},
      "deleteWordForwardAtRange": function() {},
      "deselect": function() {},
      "extend": function() {},
      "extendBackward": function() {},
      "extendForward": function() {},
      "extendTo": function() {},
      "extendToEndOf": function() {},
      "extendToEndOfNextBlock": function() {},
      "extendToEndOfNextInline": function() {},
      "extendToEndOfNextText": function() {},
      "extendToEndOfPreviousBlock": function() {},
      "extendToEndOfPreviousInline": function() {},
      "extendToEndOfPreviousText": function() {},
      "extendToStartOf": function() {},
      "extendToStartOfNextBlock": function() {},
      "extendToStartOfNextInline": function() {},
      "extendToStartOfNextText": function() {},
      "extendToStartOfPreviousBlock": function() {},
      "extendToStartOfPreviousInline": function() {},
      "extendToStartOfPreviousText": function() {},
      "flip": function() {},
      "flipSelection": function() {},
      "focus": function() {},
      "insertBlock": function() {},
      "insertBlockAtRange": function() {},
      "insertFragment": function() {},
      "insertFragmentAtRange": function() {},
      "insertInline": function() {},
      "insertInlineAtRange": function() {},
      "insertNodeByKey": function() {},
      "insertNodeOperation": function() {},
      "insertText": function() {},
      "insertTextAtRange": function() {},
      "insertTextByKey": function() {},
      "insertTextOperation": function() {},
      "joinNodeByKey": function() {},
      "joinNodeOperation": function() {},
      "move": function() {},
      "moveAnchor": function() {},
      "moveAnchorOffsetTo": function() {},
      "moveAnchorTo": function() {},
      "moveAnchorToEndOf": function() {},
      "moveAnchorToStartOf": function() {},
      "moveBackward": function() {},
      "moveEnd": function() {},
      "moveEndOffset": function() {},
      "moveEndOffsetTo": function() {},
      "moveEndTo": function() {},
      "moveFocus": function() {},
      "moveFocusOffsetTo": function() {},
      "moveFocusTo": function() {},
      "moveFocusToEndOf": function() {},
      "moveFocusToStartOf": function() {},
      "moveForward": function() {},
      "moveNodeByKey": function() {},
      "moveNodeOperation": function() {},
      "moveOffsetsTo": function() {},
      "moveStart": function() {},
      "moveStartOffset": function() {},
      "moveStartOffsetTo": function() {},
      "moveStartTo": function() {},
      "moveTo": function() {},
      "moveToEnd": function() {},
      "moveToEndOf": function() {},
      "moveToEndOfNextBlock": function() {},
      "moveToEndOfNextInline": function() {},
      "moveToEndOfNextText": function() {},
      "moveToEndOfPreviousBlock": function() {},
      "moveToEndOfPreviousInline": function() {},
      "moveToEndOfPreviousText": function() {},
      "moveToOffsets": function() {},
      "moveToRangeOf": function() {},
      "moveToRangeOfNextBlock": function() {},
      "moveToRangeOfNextInline": function() {},
      "moveToRangeOfNextText": function() {},
      "moveToRangeOfPreviousBlock": function() {},
      "moveToRangeOfPreviousInline": function() {},
      "moveToRangeOfPreviousText": function() {},
      "moveToStart": function() {},
      "moveToStartOf": function() {},
      "moveToStartOfNextBlock": function() {},
      "moveToStartOfNextInline": function() {},
      "moveToStartOfNextText": function() {},
      "moveToStartOfPreviousBlock": function() {},
      "moveToStartOfPreviousInline": function() {},
      "moveToStartOfPreviousText": function() {},
      "normalize": function() {},
      "normalizeDocument": function() {},
      "normalizeNodeByKey": function() {},
      "normalizeSelection": function() {},
      "redo": function() {},
      "removeMark": function() {},
      "removeMarkAtRange": function() {},
      "removeMarkByKey": function() {},
      "removeMarkOperation": function() {},
      "removeNodeByKey": function() {},
      "removeNodeOperation": function() {},
      "removeTextByKey": function() {},
      "removeTextOperation": function() {},
      "save": function() {},
      "select": function() {},
      "selectAll": function() {},
      "setBlock": function() {},
      "setBlockAtRange": function() {},
      "setDataOperation": function() {},
      "setInline": function() {},
      "setInlineAtRange": function() {},
      "setMarkByKey": function() {},
      "setMarkOperation": function() {},
      "setNodeByKey": function() {},
      "setNodeOperation": function() {},
      "setSelectionOperation": function() {},
      "snapshotSelection": function() {},
      "splitBlock": function() {},
      "splitBlockAtRange": function() {},
      "splitInline": function() {},
      "splitInlineAtRange": function() {},
      "splitNodeAtOffsetOperation": function() {},
      "splitNodeByKey": function() {},
      "splitNodeOperation": function() {},
      "toggleMark": function() {},
      "toggleMarkAtRange": function() {},
      "undo": function() {},
      "unsetMarks": function() {},
      "unsetSelection": function() {},
      "unwrapBlock": function() {},
      "unwrapBlockAtRange": function() {},
      "unwrapBlockByKey": function() {},
      "unwrapInline": function() {},
      "unwrapInlineAtRange": function() {},
      "unwrapInlineByKey": function() {},
      "unwrapNodeByKey": function() {},
      "wrapBlock": function() {},
      "wrapBlockAtRange": function() {},
      "wrapBlockByKey": function() {},
      "wrapInline": function() {},
      "wrapInlineAtRange": function() {},
      "wrapInlineByKey": function() {},
      "wrapText": function() {},
      "wrapTextAtRange": function() {}
  },
  "findDOMNode": function() {},
  "resetKeyGenerator": function() {},
  "setKeyGenerator": function() {}
};
