"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var data_observable = require("tns-core-modules/data/observable");
var imageAssetModule = require("tns-core-modules/image-asset");
var utils = require("tns-core-modules/utils/utils");
var defaultAssetCollectionSubtypes = NSArray.arrayWithArray([
    206,
    209,
    100,
    203,
    201,
    207,
    101,
    210,
    211,
    213
]);
var ImagePicker = (function (_super) {
    __extends(ImagePicker, _super);
    function ImagePicker(options, hostView) {
        if (options === void 0) { options = {}; }
        var _this = _super.call(this) || this;
        _this._hostView = hostView;
        var imagePickerController = QBImagePickerController.alloc().init();
        imagePickerController.assetCollectionSubtypes = defaultAssetCollectionSubtypes;
        imagePickerController.mediaType = options.mediaType ? options.mediaType.valueOf() : 0;
        imagePickerController.allowsMultipleSelection = options.mode !== 'single';
        imagePickerController.minimumNumberOfSelection = options.minimumNumberOfSelection || 0;
        imagePickerController.maximumNumberOfSelection = options.maximumNumberOfSelection || 0;
        imagePickerController.showsNumberOfSelectedAssets = options.showsNumberOfSelectedAssets || true;
        imagePickerController.numberOfColumnsInPortrait = options.numberOfColumnsInPortrait || imagePickerController.numberOfColumnsInPortrait;
        imagePickerController.numberOfColumnsInLandscape = options.numberOfColumnsInLandscape || imagePickerController.numberOfColumnsInLandscape;
        imagePickerController.prompt = options.prompt || imagePickerController.prompt;
        _this._imagePickerController = imagePickerController;
        return _this;
    }
    Object.defineProperty(ImagePicker.prototype, "hostView", {
        get: function () {
            return this._hostView;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ImagePicker.prototype, "hostController", {
        get: function () {
            var vc = this.hostView ? this.hostView.viewController : UIApplication.sharedApplication.keyWindow.rootViewController;
            while (vc.presentedViewController
                && vc.presentedViewController.viewLoaded
                && vc.presentedViewController.view.window) {
                vc = vc.presentedViewController;
            }
            return vc;
        },
        enumerable: true,
        configurable: true
    });
    ImagePicker.prototype.authorize = function () {
        console.log("authorizing...");
        return new Promise(function (resolve, reject) {
            var runloop = CFRunLoopGetCurrent();
            PHPhotoLibrary.requestAuthorization(function (result) {
                if (result === 3) {
                    resolve();
                }
                else {
                    reject(new Error("Authorization failed. Status: " + result));
                }
            });
        });
    };
    ImagePicker.prototype.present = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var imagePickerControllerDelegate = ImagePickerControllerDelegate.new();
            imagePickerControllerDelegate._resolve = resolve;
            imagePickerControllerDelegate._reject = reject;
            _this._imagePickerController.delegate = imagePickerControllerDelegate;
            _this.hostController.presentViewControllerAnimatedCompletion(_this._imagePickerController, true, null);
        });
    };
    return ImagePicker;
}(data_observable.Observable));
exports.ImagePicker = ImagePicker;
var ImagePickerControllerDelegate = (function (_super) {
    __extends(ImagePickerControllerDelegate, _super);
    function ImagePickerControllerDelegate() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ImagePickerControllerDelegate.prototype.qb_imagePickerControllerDidCancel = function (imagePickerController) {
        imagePickerController.dismissViewControllerAnimatedCompletion(true, null);
        this._reject(new Error("Selection canceled."));
        this.deRegisterFromGlobal();
    };
    ImagePickerControllerDelegate.prototype.qb_imagePickerControllerDidFinishPickingAssets = function (imagePickerController, iosAssets) {
        var _this = this;
        var assets = [];
        for (var i = 0; i < iosAssets.count; i++) {
            var asset = new imageAssetModule.ImageAsset(iosAssets[i]);
            if (!asset.options) {
                asset.options = { keepAspectRatio: true };
            }
            assets.push(asset);
        }
        this._resolve(assets);
        imagePickerController.dismissViewControllerAnimatedCompletion(true, function () {
            _this.deRegisterFromGlobal();
            setTimeout(utils.GC, 200);
        });
    };
    ImagePickerControllerDelegate.prototype.registerToGlobal = function () {
        global.imagePickerControllerDelegate = this;
    };
    ImagePickerControllerDelegate.prototype.deRegisterFromGlobal = function () {
        global.imagePickerControllerDelegate = null;
    };
    ImagePickerControllerDelegate.new = function () {
        var instance = _super.new.call(this);
        instance.registerToGlobal();
        return instance;
    };
    ImagePickerControllerDelegate.ObjCProtocols = [QBImagePickerControllerDelegate];
    return ImagePickerControllerDelegate;
}(NSObject));
exports.ImagePickerControllerDelegate = ImagePickerControllerDelegate;
function create(options, hostView) {
    return new ImagePicker(options, hostView);
}
exports.create = create;
//# sourceMappingURL=imagepicker.js.map