/**
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 *
 */

import type {LexicalEditor, NodeKey} from 'lexical';

import './SlideComponent.css';

import {CheckListPlugin} from '@lexical/react/LexicalCheckListPlugin';
import {ContentEditable} from '@lexical/react/LexicalContentEditable';
import {HistoryPlugin} from '@lexical/react/LexicalHistoryPlugin';
import {LinkPlugin} from '@lexical/react/LexicalLinkPlugin';
import {ListPlugin} from '@lexical/react/LexicalListPlugin';
import {MarkdownShortcutPlugin} from '@lexical/react/LexicalMarkdownShortcutPlugin';
import {LexicalNestedComposer} from '@lexical/react/LexicalNestedComposer';
import {RichTextPlugin} from '@lexical/react/LexicalRichTextPlugin';
import * as React from 'react';

import CodeHighlightPlugin from '../plugins/CodeHighlightPlugin';
import CodeSandboxPlugin from '../plugins/CodeSandboxPlugin';
import ExcalidrawPlugin from '../plugins/ExcalidrawPlugin/index';
import ImagesPlugin from '../plugins/ImagesPlugin';
import {PLAYGROUND_TRANSFORMERS} from '../plugins/MarkdownTransformers';
import TreeViewPlugin from '../plugins/TreeViewPlugin';

export default function SlideComponent({
  nodeKey,
  slide,
  content,
}: {
  nodeKey: NodeKey;
  slide: string;
  content: LexicalEditor;
}): JSX.Element {
  return (
    <div className="SlideComponet__slide-container">
      <div className="SlideComponet__slide">
        <LexicalNestedComposer initialEditor={content}>
          <RichTextPlugin
            contentEditable={<ContentEditable />}
            placeholder={<></>}
          />
          <ListPlugin />
          <CheckListPlugin />
          <ExcalidrawPlugin />
          <HistoryPlugin />
          <LinkPlugin />
          <ImagesPlugin />
          <CodeHighlightPlugin />
          <MarkdownShortcutPlugin transformers={PLAYGROUND_TRANSFORMERS} />
          <ExcalidrawPlugin />
          <CodeSandboxPlugin />
          {/* @ts-ignore */}
          {window.__DEBUG__ && <TreeViewPlugin />}
        </LexicalNestedComposer>
      </div>
    </div>
  );
}
