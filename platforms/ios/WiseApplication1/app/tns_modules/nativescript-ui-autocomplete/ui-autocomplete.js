function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
var view_1 = require("tns-core-modules/ui/core/view");
var observable_array_1 = require("tns-core-modules/data/observable-array");
var view_2 = require("tns-core-modules/ui/core/view");
var commonModule = require("./ui-autocomplete.common");
__export(require("./ui-autocomplete.common"));
var knownTemplates;
(function (knownTemplates) {
    knownTemplates.suggestionItemTemplate = "suggestionItemTemplate";
})(knownTemplates = exports.knownTemplates || (exports.knownTemplates = {}));
var SuggestionView = /** @class */ (function (_super) {
    __extends(SuggestionView, _super);
    function SuggestionView() {
        return _super.call(this) || this;
    }
    Object.defineProperty(SuggestionView.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        set: function (value) {
            this._ios = value;
        },
        enumerable: true,
        configurable: true
    });
    SuggestionView.prototype.updateView = function () {
        this.updateHeight();
    };
    SuggestionView.prototype.updateHeight = function () {
        if (this.owner && this.owner.nativeView && this.suggestionViewHeight) {
            this.owner.nativeView.suggestionViewHeight = this.suggestionViewHeight;
        }
    };
    SuggestionView.prototype.updateTemplate = function (value) {
        // TODO: Implement this, probably with tns-core-modules/ui/builder same as RadListView templates
        // this._ios.suggestionView = newValue;
        this.updateHeight();
    };
    SuggestionView.prototype.onSuggestionViewHeightChanged = function (oldValue, newValue) {
        this.updateHeight();
    };
    SuggestionView.prototype.onSuggestionItemTemplateChanged = function (oldValue, newValue) {
        this.updateTemplate(newValue);
    };
    return SuggestionView;
}(commonModule.SuggestionView));
exports.SuggestionView = SuggestionView;
var SuggestionViewCell = /** @class */ (function (_super) {
    __extends(SuggestionViewCell, _super);
    function SuggestionViewCell() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SuggestionViewCell.new = function () {
        var instance = _super.new.call(this);
        return instance;
    };
    SuggestionViewCell.class = function () {
        return SuggestionViewCell;
    };
    SuggestionViewCell.prototype.layoutSubviews = function () {
        _super.prototype.layoutSubviews.call(this);
        var itemViewDimensions = this.measureCell(this.view.itemView);
        var cellView = this.view.itemView;
        view_1.View.layoutChild(this.owner, cellView, 0, 0, itemViewDimensions.measuredWidth, itemViewDimensions.measuredHeight);
    };
    SuggestionViewCell.prototype.measureCell = function (cellView) {
        if (cellView) {
            var itemWidth = this.owner.getMeasuredWidth();
            var heightSpec = view_2.layout.makeMeasureSpec(0, view_2.layout.UNSPECIFIED);
            var widthSpec = view_2.layout.makeMeasureSpec(itemWidth, view_2.layout.EXACTLY);
            return view_1.View.measureChild(this.owner, cellView, widthSpec, heightSpec);
        }
        return undefined;
    };
    return SuggestionViewCell;
}(TKAutoCompleteSuggestionCell));
var TokenModel = /** @class */ (function (_super) {
    __extends(TokenModel, _super);
    function TokenModel(text, image) {
        var _this = _super.call(this, text, image) || this;
        var nativeText = NSString.stringWithCStringEncoding(text, NSUTF8StringEncoding);
        _this._ios = TKAutoCompleteToken.alloc().initWithText(nativeText);
        if (image) {
            if (image.startsWith("res://")) {
                var name_1 = image.substring(6, image.length);
                _this._ios.image = UIImage.imageNamed(name_1);
            }
            else {
                _this._ios.image = UIImage.imageNamed(image);
            }
        }
        return _this;
    }
    Object.defineProperty(TokenModel.prototype, "ios", {
        get: function () {
            return this._ios;
        },
        enumerable: true,
        configurable: true
    });
    return TokenModel;
}(commonModule.TokenModel));
exports.TokenModel = TokenModel;
var CompletionModeImpl = /** @class */ (function (_super) {
    __extends(CompletionModeImpl, _super);
    function CompletionModeImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CompletionModeImpl.new = function () {
        return _super.new.call(this);
    };
    CompletionModeImpl.StartsWith = function (input, suggestions, owner) {
        var result = NSMutableArray.alloc().initWithCapacity(suggestions.length);
        var nsResult = new Array();
        for (var i = 0; i < suggestions.length; i++) {
            var current = suggestions.getItem(i);
            // We are making copies of the original items, in order to allow selecting
            // one item more than once. If we used the original items, select the
            // same token twice and try to remove all tokens we would get an exception
            // since one token will be attampted to be removed twice.
            var clone = new TokenModel(current.text, current.image);
            var upperCase = clone.ios.text.toUpperCase();
            if (upperCase['startsWith'](input.toUpperCase())) {
                result.addObject(clone.ios);
                nsResult.push(clone);
            }
        }
        owner._filteredItems = nsResult;
        return result;
    };
    CompletionModeImpl.Contains = function (input, suggestions, owner) {
        var result = NSMutableArray.alloc().initWithCapacity(suggestions.length);
        var nsResult = new Array();
        for (var i = 0; i < suggestions.length; i++) {
            var current = suggestions.getItem(i);
            // We are making copies of the original items, in order to allow selecting
            // one item more than once. If we used the original items, select the
            // same token twice and try to remove all tokens we would get an exception
            // since one token will be attampted to be removed twice.
            var clone = new TokenModel(current.text, current.image);
            var upperCase = clone.ios.text.toUpperCase();
            if (upperCase.indexOf(input.toUpperCase()) !== -1) {
                result.addObject(clone.ios);
                nsResult.push(clone);
            }
        }
        owner._filteredItems = nsResult;
        return result;
    };
    return CompletionModeImpl;
}(NSObject));
// suggestion view data source
var SuggestionViewDataSourceImpl = /** @class */ (function (_super) {
    __extends(SuggestionViewDataSourceImpl, _super);
    function SuggestionViewDataSourceImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SuggestionViewDataSourceImpl.new = function () {
        return _super.new.call(this);
    };
    SuggestionViewDataSourceImpl.prototype.initWithOwner = function (owner) {
        this._owner = new WeakRef(owner);
        return this;
    };
    SuggestionViewDataSourceImpl.prototype.collectionViewNumberOfItemsInSection = function (collectionView, section) {
        var owner = this._owner.get();
        // todo: update to support custom DataSource object from owner
        return owner.suggestionView && owner.suggestionView.ios && owner.suggestionView.ios.items ?
            owner.suggestionView.ios.items.count : 0;
    };
    SuggestionViewDataSourceImpl.prototype.collectionViewCellForItemAtIndexPath = function (collectionView, indexPath) {
        var owner = this._owner.get();
        var cell = collectionView.dequeueReusableCellWithReuseIdentifierForIndexPath("defaultCell", indexPath);
        if (!cell.owner) {
            cell.backgroundView.stroke = null;
            cell.owner = owner;
            var template = new Object();
            template.itemView = owner.getViewForViewType(commonModule.AutoCompleteViewType.ItemView);
            cell.view = template;
            owner._addView(template.itemView);
            cell.contentView.addSubview(template.itemView.ios);
        }
        var model = owner._filteredItems[indexPath.row];
        cell.view.itemView.bindingContext = model;
        var args = {
            eventName: commonModule.RadAutoCompleteTextView.itemLoadingEvent,
            index: indexPath.row,
            view: cell.view.itemView,
            ios: cell,
            data: model
        };
        owner.notify(args);
        return cell;
    };
    SuggestionViewDataSourceImpl.prototype.numberOfSectionsInCollectionView = function (collectionView) {
        return 1;
    };
    SuggestionViewDataSourceImpl.ObjCProtocols = [UICollectionViewDataSource, UICollectionViewDelegate];
    return SuggestionViewDataSourceImpl;
}(NSObject));
var AutoCompleteAsyncDataSourceImpl = /** @class */ (function (_super) {
    __extends(AutoCompleteAsyncDataSourceImpl, _super);
    function AutoCompleteAsyncDataSourceImpl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentCompletionMode = CompletionModeImpl.StartsWith;
        return _this;
    }
    AutoCompleteAsyncDataSourceImpl.new = function () {
        return _super.new.call(this);
    };
    AutoCompleteAsyncDataSourceImpl.prototype.initWithOwner = function (owner) {
        this._owner = new WeakRef(owner);
        return this;
    };
    AutoCompleteAsyncDataSourceImpl.prototype.autoCompleteCompletionsForString = function (autocomplete, input) {
        var self = this;
        var owner = self._owner.get();
        owner.asyncCall(input).then(function (items) {
            var radAutoComplete = self._owner.get();
            var result = NSMutableArray.new();
            var nsResult = new Array();
            radAutoComplete.items = new observable_array_1.ObservableArray();
            if (radAutoComplete.completionMode === commonModule.AutoCompleteCompletionMode.StartsWith) {
                for (var i = 0; i < items.length; i++) {
                    var current = items[i];
                    var upperCase = current.ios.text.toUpperCase();
                    if (upperCase.startsWith(input.toUpperCase())) {
                        result.addObject(current.ios);
                        nsResult.push(current);
                        radAutoComplete.items.push(current);
                    }
                }
            }
            else {
                for (var i = 0; i < items.length; i++) {
                    var current = items[i];
                    var upperCase = current.ios.text.toUpperCase();
                    if (upperCase.indexOf(input.toUpperCase()) !== -1) {
                        result.addObject(current.ios);
                        nsResult.push(current);
                        radAutoComplete.items.push(current);
                    }
                }
            }
            radAutoComplete._filteredItems = nsResult;
            radAutoComplete._ios.completeSuggestionViewPopulation(result);
        });
    };
    AutoCompleteAsyncDataSourceImpl.ObjCProtocols = [TKAutoCompleteDataSource];
    return AutoCompleteAsyncDataSourceImpl;
}(NSObject));
// AutoCompleteDataSource
var AutoCompleteDataSourceImpl = /** @class */ (function (_super) {
    __extends(AutoCompleteDataSourceImpl, _super);
    function AutoCompleteDataSourceImpl() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.currentCompletionMode = CompletionModeImpl.StartsWith;
        return _this;
    }
    AutoCompleteDataSourceImpl.new = function () {
        return _super.new.call(this);
    };
    AutoCompleteDataSourceImpl.prototype.initWithOwner = function (owner) {
        this._owner = new WeakRef(owner);
        return this;
    };
    AutoCompleteDataSourceImpl.prototype.autoCompleteCompletionForPrefix = function (autocomplete, prefix) {
        var suggestions = NSMutableArray.new();
        var owner = this._owner.get();
        if (prefix === "") {
            owner.nativeView.suggestionView.hide();
            return suggestions;
        }
        else {
            return this.currentCompletionMode(prefix, owner.items, owner);
        }
    };
    AutoCompleteDataSourceImpl.ObjCProtocols = [TKAutoCompleteDataSource];
    return AutoCompleteDataSourceImpl;
}(NSObject));
// AutoCompleteDelagate
var AutoCompleteDelegateImpl = /** @class */ (function (_super) {
    __extends(AutoCompleteDelegateImpl, _super);
    function AutoCompleteDelegateImpl() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    AutoCompleteDelegateImpl.new = function () {
        return _super.new.call(this);
    };
    AutoCompleteDelegateImpl.prototype.initWithOwner = function (owner) {
        this._owner = new WeakRef(owner);
        this._firstInput = true;
        return this;
    };
    AutoCompleteDelegateImpl.prototype.autoCompleteWillShowSuggestionList = function (autocomplete, suggestionList) {
        var owner = this._owner.get();
        var args = new commonModule.AutoCompleteEventData(owner, commonModule.RadAutoCompleteTextView.suggestionViewBecameVisibleEvent, undefined, undefined);
        owner.notify(args);
    };
    AutoCompleteDelegateImpl.prototype.autoCompleteDidChangeText = function (autocomplete, text) {
        var owner = this._owner.get();
        if (owner.text !== text) {
            var args = new commonModule.AutoCompleteEventData(owner, commonModule.RadAutoCompleteTextView.textChangedEvent, text, undefined);
            owner.text = text;
            owner.notify(args);
        }
    };
    AutoCompleteDelegateImpl.prototype.autoCompleteDidAddToken = function (autocomplete, token) {
        var owner = this._owner.get();
        var tokenModel = owner.tokenModelWithText(token.text);
        var args = new commonModule.AutoCompleteEventData(owner, commonModule.RadAutoCompleteTextView.tokenAddedEvent, token.text, tokenModel);
        owner.notify(args);
        owner.requestLayout();
    };
    AutoCompleteDelegateImpl.prototype.autoCompleteDidRemoveToken = function (autocomplete, token) {
        var owner = this._owner.get();
        var tokenModel = owner.tokenModelWithText(token.text);
        var args = new commonModule.AutoCompleteEventData(owner, commonModule.RadAutoCompleteTextView.tokenRemovedEvent, token.text, tokenModel);
        owner.notify(args);
        // TODO: Investigate this in native iOS why it requires an time out.
        setTimeout(function () {
            owner.requestLayout();
        }, 10);
    };
    AutoCompleteDelegateImpl.prototype.autoCompleteDidSelectToken = function (autocomplete, token) {
        var owner = this._owner.get();
        var tokenModel = owner.tokenModelWithText(token.text);
        var args = new commonModule.AutoCompleteEventData(owner, commonModule.RadAutoCompleteTextView.tokenSelectedEvent, token.text, tokenModel);
        owner.notify(args);
    };
    AutoCompleteDelegateImpl.prototype.autoCompleteDidDeselectToken = function (autocomplete, token) {
        var owner = this._owner.get();
        var tokenModel = owner.tokenModelWithText(token.text);
        var args = new commonModule.AutoCompleteEventData(owner, commonModule.RadAutoCompleteTextView.tokenDeselectedEvent, token.text, tokenModel);
        owner.notify(args);
    };
    AutoCompleteDelegateImpl.prototype.autoCompleteDidAutoComplete = function (autocomplete, token) {
        var owner = this._owner.get();
        var args = new commonModule.AutoCompleteEventData(owner, commonModule.RadAutoCompleteTextView.didAutoCompleteEvent, token.text, undefined);
        owner.notify(args);
    };
    AutoCompleteDelegateImpl.ObjCProtocols = [TKAutoCompleteDelegate];
    return AutoCompleteDelegateImpl;
}(NSObject));
var RadAutoCompleteTextView = /** @class */ (function (_super) {
    __extends(RadAutoCompleteTextView, _super);
    function RadAutoCompleteTextView() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    RadAutoCompleteTextView.prototype.createNativeView = function () {
        this._ios = TKAutoCompleteTextView.new();
        this._ios.minimumCharactersToSearch = 1;
        if (!this._dataSource) {
            this._dataSource = AutoCompleteDataSourceImpl.new().initWithOwner(this);
            this._dataSource.currentCompletionMode = CompletionModeImpl.StartsWith;
            this._ios.dataSource = this._dataSource;
            this.adjustCompletionMode(this.completionMode);
        }
        this._ios.suggestionView.registerClassForCellWithReuseIdentifier(SuggestionViewCell.class(), "defaultCell");
        this._suggestionViewDataSource = SuggestionViewDataSourceImpl.new().initWithOwner(this);
        this._ios.suggestionView.dataSource = this._suggestionViewDataSource;
        this._delegate = AutoCompleteDelegateImpl.new().initWithOwner(this);
        this._ios.delegate = this._delegate;
        return this._ios;
    };
    RadAutoCompleteTextView.prototype.disposeNativeView = function () {
        this._ios.delegate = undefined;
        this._ios.dataSource = undefined;
        this._dataSource = undefined;
        this._ios = undefined;
        this._delegate = undefined;
    };
    RadAutoCompleteTextView.prototype.resetAutoComplete = function () {
        this._ios.resetAutocompleteState();
        this.requestLayout();
    };
    Object.defineProperty(RadAutoCompleteTextView.prototype, "filteredItems", {
        get: function () {
            if (this._filteredItems === undefined) {
                this._filteredItems = new Array();
            }
            return this._filteredItems;
        },
        enumerable: true,
        configurable: true
    });
    RadAutoCompleteTextView.prototype.addToken = function (token) {
        var text = NSString.stringWithCStringEncoding(token.text, NSUTF8StringEncoding);
        var native = TKAutoCompleteToken.alloc().initWithText(text);
        this._ios.addToken(native);
        this.requestLayout();
    };
    RadAutoCompleteTextView.prototype.insertTokenAtIndex = function (token, index) {
        var text = NSString.stringWithCStringEncoding(token.text, NSUTF8StringEncoding);
        var native = TKAutoCompleteToken.alloc().initWithText(text);
        this._ios.insertTokenAtIndex(native, index);
    };
    RadAutoCompleteTextView.prototype.removeToken = function (token) {
        var text = NSString.stringWithCStringEncoding(token.text, NSUTF8StringEncoding);
        var native = TKAutoCompleteToken.alloc().initWithText(text);
        this._ios.removeToken(native);
        this.requestLayout();
    };
    RadAutoCompleteTextView.prototype.removeTokenAtIndex = function (index) {
        this._ios.removeTokenAtIndex(index);
        this.requestLayout();
    };
    RadAutoCompleteTextView.prototype.removeAllTokens = function () {
        this._ios.removeAllTokens();
        this.requestLayout();
    };
    RadAutoCompleteTextView.prototype.tokens = function () {
        return this._ios.tokens;
    };
    RadAutoCompleteTextView.prototype.tokenAtIndex = function (index) {
        return this._ios.tokenAtIndex(index);
    };
    RadAutoCompleteTextView.prototype[commonModule.RadAutoCompleteTextView.displayModeProperty.setNative] = function (newValue) {
        this.adjustDisplayMode(newValue);
    };
    RadAutoCompleteTextView.prototype[commonModule.RadAutoCompleteTextView.layoutModeProperty.setNative] = function (newValue) {
        this.adjustLayoutMode(newValue);
    };
    RadAutoCompleteTextView.prototype[commonModule.RadAutoCompleteTextView.suggestModeProperty.setNative] = function (newValue) {
        this.adjustSuggestMode(newValue);
    };
    RadAutoCompleteTextView.prototype[commonModule.RadAutoCompleteTextView.loadSuggestionsAsyncProperty.setNative] = function (newValue) {
        this.asyncCall = newValue;
        this._dataSource = AutoCompleteAsyncDataSourceImpl.new().initWithOwner(this);
        this._dataSource.currentCompletionMode = CompletionModeImpl.StartsWith;
        this._ios.dataSource = this._dataSource;
    };
    RadAutoCompleteTextView.prototype[commonModule.RadAutoCompleteTextView.completionModeProperty.setNative] = function (newValue) {
        this.adjustCompletionMode(newValue);
    };
    RadAutoCompleteTextView.prototype[commonModule.RadAutoCompleteTextView.suggestionViewProperty.setNative] = function (newValue) {
        var suggestionView = newValue;
        suggestionView.owner = this;
        suggestionView.ios = this._ios.suggestionView;
        if (suggestionView.suggestionViewHeight) {
            this._ios.suggestionViewHeight = suggestionView.suggestionViewHeight;
        }
        this._ios.suggestionView.reloadData();
        suggestionView.updateView();
    };
    RadAutoCompleteTextView.prototype[commonModule.RadAutoCompleteTextView.minimumCharactersToSearchProperty.setNative] = function (newValue) {
        this._ios.minimumCharactersToSearch = newValue;
    };
    RadAutoCompleteTextView.prototype[commonModule.RadAutoCompleteTextView.noResultsTextProperty.setNative] = function (newValue) {
        this._ios.noResultsText = newValue;
    };
    RadAutoCompleteTextView.prototype[commonModule.RadAutoCompleteTextView.showCloseButtonProperty.setNative] = function (newValue) {
        this._ios.showCloseButton = newValue;
    };
    RadAutoCompleteTextView.prototype[commonModule.RadAutoCompleteTextView.hintProperty.setNative] = function (newValue) {
        this._ios.textField.placeholder = newValue;
    };
    RadAutoCompleteTextView.prototype[commonModule.RadAutoCompleteTextView.textProperty.setNative] = function (newValue) {
        if (this._ios.textField.text === newValue) {
            return;
        }
        this._ios.textField.text = newValue;
        this._ios.updateCloseButtonVisibility();
        var args = new commonModule.AutoCompleteEventData(this, commonModule.RadAutoCompleteTextView.textChangedEvent, newValue, undefined);
        this.notify(args);
    };
    RadAutoCompleteTextView.prototype[commonModule.RadAutoCompleteTextView.closeButtonImageSrcProperty.setNative] = function (newValue) {
        var imageSrc = this.closeButtonImageSrc;
        var image;
        if (!imageSrc) {
            image = UIImage.new();
        }
        else if (imageSrc.startsWith("res://")) {
            var name_2 = imageSrc.substring(6, imageSrc.length);
            image = UIImage.imageNamed(name_2);
        }
        else {
            image = UIImage.imageNamed(imageSrc);
        }
        this._ios.closeButton.setImageForState(image, 0 /* Normal */);
    };
    RadAutoCompleteTextView.prototype.tokenModelWithText = function (text) {
        if (this.items) {
            for (var i = 0; i < this.items.length; i++) {
                var current = this.items.getItem(i);
                if (current.text === text) {
                    return current;
                }
            }
        }
        return null;
    };
    RadAutoCompleteTextView.prototype[commonModule.RadAutoCompleteTextView.readOnlyProperty.setNative] = function (newValue) {
        this._ios.readOnly = newValue;
    };
    RadAutoCompleteTextView.prototype.adjustCompletionMode = function (value) {
        if (this._ios && value && this._dataSource) {
            if (value === commonModule.AutoCompleteCompletionMode.StartsWith) {
                this._dataSource.currentCompletionMode = CompletionModeImpl.StartsWith;
            }
            else {
                this._dataSource.currentCompletionMode = CompletionModeImpl.Contains;
            }
        }
    };
    RadAutoCompleteTextView.prototype.adjustDisplayMode = function (value) {
        if (this._ios && value) {
            this._ios.displayMode = (value === commonModule.AutoCompleteDisplayMode.Plain) ?
                0 /* Plain */ :
                1 /* Tokens */;
        }
    };
    RadAutoCompleteTextView.prototype.adjustSuggestMode = function (value) {
        if (this._ios && value) {
            if (value === commonModule.AutoCompleteSuggestMode.Suggest) {
                this._ios.suggestMode = 0 /* Suggest */;
            }
            else if (value === commonModule.AutoCompleteSuggestMode.Append) {
                this._ios.suggestMode = 1 /* Append */;
            }
            else {
                this._ios.suggestMode = 2 /* SuggestAppend */;
            }
        }
    };
    RadAutoCompleteTextView.prototype.adjustLayoutMode = function (value) {
        if (value && this._ios) {
            this._ios.layoutMode = (value === commonModule.AutoCompleteLayoutMode.Horizontal) ?
                0 /* Horizontal */ :
                1 /* Wrap */;
            this.requestLayout();
        }
    };
    return RadAutoCompleteTextView;
}(commonModule.RadAutoCompleteTextView));
exports.RadAutoCompleteTextView = RadAutoCompleteTextView;
